# API contract the study frontend expects

Base URL: `VITE_API_BASE_URL` if set. On localhost with no override, `https://localhost:44348/`. Otherwise `https://ecdmy.com/`. Paths below are joined onto that host. The host should end with `/`.

Requests send `Content-Type: application/json`. After sign-in, requests send `Authorization: Bearer <token>`.

The token and person are stored in `localStorage` as `wealthEd.authToken` and `wealthEd.person`. The JWT is HS256 and lasts 12 hours. The client reads `exp` and calls refresh about two minutes before expiry.

Dates are UTC timestamps with a trailing `Z`. The UI shows them in local time.

## Empty bodies and percent

A signed-out `401` on a study route has an **empty body**. The client reads the body as text and does not `JSON.parse` it when it is empty or is not JSON. Any `401` whose path is not an auth route clears the session and sends the person to sign in, including that empty signed-out `401`.

`percent` may be `50` or `50.0`. The client formats it. A whole number stays a whole number. Any other value is shown to one decimal place.

A study `404` whose message is exactly `Study progress is not available yet.` means those routes are not deployed. The UI says so and keeps progress in this browser.

`400`, `409`, and `429` bodies are `{ "message": "..." }`. The UI shows `message` verbatim. Problem details (`errors`, `title`, `detail`) are also accepted.

## Auth

These routes are **not** `ebi/WealthEd/auth`, except forgot and reset.

### `POST api/wealthEdAgent/auth/login`

`{ "username", "password" }`

`200` `{ "token", "person": { "personId", "username", "fname", "lname", "emailAddress", "phone", "agentId", "agentSlug" } }`

`401` `{ "message": "Incorrect username or password." }`

Works for an existing myWealthEd account. After success the person stays on this site.

### `POST api/wealthEdAgent/auth/register`

`{ "username", "password", "confirmPassword", "fname", "lname", "emailAddress" }`

`200` same shape as login.

Limits the client enforces before send: username 100, first name 200, last name 25, password at least 8 characters, passwords match.

`400` validation `{ "message" }`. `409` account already exists `{ "message" }`. The UI shows that message and a “Sign in instead” link. `429` `{ "message" }`.

### `POST api/wealthEdAgent/auth/refresh`

Bearer token. `200` same shape as login, or `401`.

### Forgot and reset

`POST ebi/WealthEd/auth/password/forgot` with `{ "username" }`.

`POST ebi/WealthEd/auth/password/reset` with `{ "token", "newPassword", "confirmPassword" }`. The page route is `/reset-password/:token`.

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

`{ "chosenOptionId", "correctOptionId" }`

`{ "answer": { "questionId", "chosenOptionId", "correctOptionId", "isCorrect", "answeredAt" }, "attempt" }`

`isCorrect` is a case-sensitive id match. Ids are 1–64 characters. `409` if the stored answer is different, the attempt is already complete, or the attempt is already full. Sending the same answer again returns the stored answer.

### `POST attempts/{attemptId}/complete`

`{ "attempt" }`

### `GET attempts`

`{ "attempts": [] }` newest first.

### `GET attempts/{attemptId}`

`{ "attempt", "answers": [] }`

## Network failures

If the host cannot be reached, the UI says: `Can't reach the server right now. Try again in a moment.`

If the session token is expired, the UI says: `Your session timed out. Please sign in again.`
