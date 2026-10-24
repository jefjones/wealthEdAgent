# Utah Life and Health Insurance Study Contents

A frontend study site for the Utah life insurance course. Reading is stored in the app. Sign-in, reading progress, seen questions, and practice-test scores use the shared wealthEdAgent API.

The pages are medium blue and the site stands on its own.

## Run locally

```bash
cd client
npm install
npm run dev
```

The dev server listens on port **3005** (`strictPort`).

```bash
npm test
npm run build
```

## API host

Every API call uses `VITE_API_BASE_URL`.

- `client/.env.development` is `https://localhost:44348/` (IIS Express).
- `client/.env.production` is `https://ecdmy.com/`.

`VITE_USE_MOCK=true` in the development file keeps accounts, progress, and tests in this browser and does not call the network. Set it to `false` to call the API.

The dev certificate for `https://localhost:44348/` has to be trusted in the browser. If requests fail, open that address once and accept the certificate, then try again.

Env files are gitignored. Local copies:

```
# client/.env.development
VITE_USE_MOCK=true
VITE_API_BASE_URL=https://localhost:44348/

# client/.env.production
VITE_USE_MOCK=false
VITE_API_BASE_URL=https://ecdmy.com/
```

## What the app does

- Register a study account, or sign in with an existing one. A taken username shows the server message and a link to sign in.
- Read one section at a time, with previous and next, completion tracking, and resume.
- Start an overall practice test. Choose how many questions, and whether they must be unseen.
- After each answer, the wrong choice is marked in red and the correct choice in green, with an explanation of every option.
- At the end, the score, percentage, and a row of results. Selecting a mark opens that question again.
- Progress lists every attempt in local date and time, plus average score, questions seen, and a trend.

If a signed-out study call returns an empty 401, the app does not parse that body as JSON. It sends the person to sign in. Percentages such as `50` and `50.0` are formatted in the browser.

Highlights are stored in this browser when that route returns 404. Progress, seen questions, and test scores still use the server. A certificate or CORS failure affects only the feature that was called.

The question bank is local. The server stores the attempt and the answers, not the draw. The browser that started the test keeps the question ids and the shuffled order so a refresh can resume.

Course text extracted from the source pages is in `content/source/`.

See `docs/api-contract.md` for the routes this frontend calls.
