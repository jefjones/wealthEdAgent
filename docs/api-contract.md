# API contract the study frontend expects

Base URL: `VITE_API_BASE_URL` only. Development (`client/.env.development`) is `https://localhost:44348/`. Production (`client/.env.production`) is `https://ecdmy.com/`. Paths below are joined onto that host. The host should end with `/`.

Requests send `Content-Type: application/json`. After sign-in, requests send `Authorization: Bearer <token>`.

The token and person are stored in `localStorage` as `wealthEd.authToken` and `wealthEd.person`. The JWT is HS256 and lasts 12 hours. The client reads `exp` and calls refresh about two minutes before expiry.

Dates are UTC timestamps with a trailing `Z`. The UI shows them in local time.

## Empty bodies and percent

A signed-out `401` on a study route has an **empty body**. The client reads the body as text and does not `JSON.parse` it when it is empty or is not JSON. Any `401` whose path is not an auth route clears the session and sends the person to sign in, including that empty signed-out `401`.

`percent` may be `50` or `50.0`. The client formats it. A whole number stays a whole number. Any other value is shown to one decimal place.

Each study feature is checked on its own. A `404` on highlights or search history, including an empty body, keeps that feature in this browser and does not stop progress, seen questions, or attempts from using the server. A `404` whose message is exactly `Study progress is not available yet.` means that one route is not deployed. The banner names only the feature that failed, for example `Highlights are saved in this browser only for now.` The client asks again on the next page load, when the window regains focus, and about once a minute. When a route responds, that feature's browser copy is uploaded once for the signed-in person and marked so it is not repeated: newer progress wins, and highlights and attempts are a union by id. Older local rows do not replace newer server rows.

`400`, `409`, and `429` bodies are `{ "message": "..." }`. The UI shows `message` verbatim. Problem details (`errors`, `title`, `detail`) are also accepted.

## Auth

These routes are **not** `ebi/WealthEd/auth`, except forgot and reset.

### `POST api/wealthEdAgent/auth/login`

`{ "username", "password" }`

`200` `{ "token", "person": { "personId", "username", "fname", "lname", "emailAddress", "phone", "agentId", "agentSlug" } }`

`401` `{ "message": "Incorrect username or password." }`

After success the person stays on this site.

### `POST api/wealthEdAgent/auth/register`

`{ "username", "password", "confirmPassword", "fname", "lname", "emailAddress" }`

`200` same shape as login.

Limits the client enforces before send: username 100, first name 200, last name 25, password at least 8 characters, passwords match.

`400` validation `{ "message" }`. `409` account already exists `{ "message" }`. The UI shows that message and a “Sign in instead” link. `429` `{ "message" }`.

### `POST api/wealthEdAgent/auth/refresh`

Bearer token. `200` same shape as login, or `401`.

### `POST api/wealthEdAgent/auth/password/forgot`

`{ "username" }`

Always `200`. When the account can be reset, the server emails a link to `https://wealthedagent.com/reset-password/<token>`. The response does not say whether the username exists. The login page links to `/forgot` with “Forgot password?”. After submit, the page shows: if an account exists for that username, a reset email was sent.

### `POST api/wealthEdAgent/auth/password/reset`

`{ "token", "newPassword", "confirmPassword" }`

The public page is `/reset-password/:token`. The client checks that the two passwords match before sending. Tokens are single-use. An invalid or expired token returns an error `{ "message" }`, which the page shows. Success replaces the form with a confirmation and a link back to sign in.

## Study

All of these require auth. Prefix: `api/wealthEdAgent/study/`.

### `GET progress`

`{ "sections": [{ "chapterId", "sectionId", "completed", "completedAt" }] }`

### `PUT progress/{chapterId}/{sectionId}`

Body `{ "completed": true|false }`. Response `{ "section" }` with the same fields.

### `GET questions/seen`

`{ "questionIds": [], "seen": [{ "questionId", "firstSeenUtc" }] }`

There is no separate “mark seen” call. A question counts as seen when an answer is stored.

### `POST attempts`

`{ "mode": "unseen"|"any", "questionCount": 1..500 }`

`{ "attempt": { "attemptId", "mode", "startedAt", "completedAt", "questionCount", "answeredCount", "correctCount", "percent" } }`

The server does **not** return question ids. The client draws from the local bank, using seen ids (and, for unseen mode, ids already drawn in this browser). It stores `{ questionIds, optionOrder }` in `localStorage` under `wealthEdAgent.draws.v1` so a refresh on the same browser can continue.

### `PUT attempts/{attemptId}/answers/{questionId}`

`{ "chosenOptionId", "correctOptionId", "seconds"? }`

`seconds` is optional whole seconds from when the question was shown until it was answered. Older stored answers omit it.

`{ "answer": { "questionId", "chosenOptionId", "correctOptionId", "isCorrect", "answeredAt", "seconds"? }, "attempt" }`

`isCorrect` is a case-sensitive id match. Ids are 1–64 characters. `409` if the stored answer is different, the attempt is already complete, or the attempt is already full. Sending the same answer again returns the stored answer.

### `POST attempts/{attemptId}/complete`

`{ "attempt" }`

### `GET attempts`

`{ "attempts": [] }` newest first.

### `GET attempts/{attemptId}`

`{ "attempt", "answers": [] }`

### `GET highlights`

`{ "highlights": [{ "highlightId", "chapterId", "sectionId", "startOffset", "endOffset", "text", "createdAt" }] }`

Offsets are JavaScript string indexes into that section’s stored plain text (`section.body`). `startOffset` is inclusive and `endOffset` is exclusive, so `text` is `body.slice(startOffset, endOffset)`. Newlines and the bullet prefix `• ` are part of the string and keep their offsets. If the section text changes and the offsets no longer slice to `text`, the client places the highlight on the nearest remaining copy of that text. If the text is gone, the study page does not paint it and the previous and next highlight links skip it. The Highlights report still lists it, notes “Text no longer in this section,” and still deletes it.

### `POST highlights`

`{ "chapterId", "sectionId", "startOffset", "endOffset", "text" }`

`text` is 1 to 2000 characters and its length must equal `endOffset - startOffset`. `400` on bad input. An exact duplicate (same chapter, section, offsets, and text) returns the existing row.

`200` `{ "highlight" }` with the fields from the list.

### `DELETE highlights/{highlightId}`

`200` `{ "deleted": true }`. `404` when the highlight is not on this account.

A `404` on `GET` or `POST highlights`, including an empty body, before those routes are deployed keeps highlights in this browser. The banner says highlights are saved in this browser only for now. Progress, seen questions, and attempts keep using the server. `DELETE` still returns `404` when the row is not theirs, and that `404` does not switch highlights into the browser backup. A highlight deleted while the server was unavailable is deleted on the server once, when it is back, and is not posted again.

### `POST activity`

`{ "events": [ { "kind": "study"|"test"|"login", "chapterId": "ch-general", "seconds": 600, "occurredAtUtc": "2026-10-23T14:00:00.000Z" } ] }`

1 to 50 events. `seconds` is a whole number from 0 to 7200. `chapterId` is required for `study` and `test`. It is the same id `PUT progress/{chapterId}/{sectionId}` already uses: `ch-general`, `ch-basics`, `ch-policies`, `ch-provisions`, `ch-annuities`, `ch-qualified`, `ch-taxation`, `ch-health`, `ch-disability`, `ch-medical`, `ch-group`, `ch-dental`, `ch-medicare`, `ch-health-tax`, or `ch-utah`. It is null only for `login`. The client does not send a chapter title or a display number. Those labels stay in the browser. `occurredAtUtc` is not in the future.

`200` `{ "recorded": n, "lastActivityUtc": "..." }`. Any bad event rejects the whole batch with `400` `{ "message" }`. `404` means this route is not deployed yet.

The client sends one `login` event after a successful sign-in (register or login), not on a restored session and not on token refresh. While a study section is open, the tab is visible, and the reader has scrolled, clicked, pressed a key, touched, or moved the pointer within the last 2 minutes, it counts active seconds for that chapter. It posts a `study` event when the chapter changes, every 5 minutes, when the tab is hidden, on sign-out, and on `pagehide`. `occurredAtUtc` is when that stretch started. A study stretch of 0 seconds is not sent. A login event is sent with `seconds` 0. Each event is capped at 7200 seconds. The client does not send `test` events; question time is already stored on attempt answers.

Unsent events wait in `localStorage` under `wealthEdAgent.activity.v1` and are tried again on the next flush. A `404` or any other `4xx` drops that batch after one attempt. The page does not show an error and does not switch on the “kept in this browser” banner. Network failures and `5xx` stay queued. Mock mode does not send. Sign-out and `pagehide` use `fetch` with `keepalive` and the bearer header, and they do not block navigation.

### `GET search-history`

`{ "entries": [{ "entryId", "text", "searchedAt" }] }`

Newest first. At most 50 entries. `text` is 1 to 200 characters. `searchedAt` is a UTC timestamp.

There is no net8 route for this yet. A `404` on `GET` or `POST`, including an empty body, keeps subject searches in this browser. The banner says subject searches are saved in this browser only for now. Other study features keep using the server.

### `POST search-history`

`{ "text" }`

The server trims the text, matches an existing row for this person by a case-insensitive and diacritic-insensitive key, and updates `searchedAt` when the words were already saved. Otherwise it inserts a row. The response is `{ "entry": { "entryId", "text", "searchedAt" } }`. After the write, the person has at most 50 rows; older ones are deleted. `400` when the text is empty or longer than 200 characters.

### `DELETE search-history/{entryId}`

`200` `{ "deleted": true }`. `404` when that entry is not on this account. That `404` does not switch search history into the browser backup.

### `DELETE search-history`

Deletes every saved search for this person. `200` `{ "deleted": true }`.

## Network failures

If the host cannot be reached, auth screens say: `Can't reach the server right now. Try again in a moment.` A failed study request (the browser blocked the call, or the server returned `5xx`) keeps that feature's backup in this browser. The banner names only that feature. A certificate failure or a CORS failure is this case: `fetch` throws, and the client marks the error as a network failure for the feature that was called.

If the session token is expired, the UI says: `Your session timed out. Please sign in again.`
