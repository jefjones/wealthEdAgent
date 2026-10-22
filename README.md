# Utah Life and Health Insurance Study Contents

A frontend study site for the Utah life insurance course. Reading is stored in the app. Sign-in, reading progress, seen questions, and practice-test scores use the shared wealthEdAgent API.

The pages are medium blue, separate from the myWealthEd site. An existing myWealthEd username and password signs in here and stays on this site.

## Run locally

```bash
cd client
npm install
npm run dev
```

The dev server listens on port **3000**.

```bash
npm test
npm run build
```

## API host

`VITE_API_BASE_URL` wins when it is set.

- On `localhost` or `127.0.0.1`, with no override, calls go to `https://localhost:44348/` (IIS Express).
- Otherwise they go to `https://ecdmy.com/`.

`VITE_USE_MOCK=true` keeps accounts, progress, and tests in this browser and does not call the network. The development env file uses mock mode so the UI can be tried without the API. A production build should set `VITE_USE_MOCK=false` and `VITE_API_BASE_URL=https://ecdmy.com/`.

Env files are gitignored. Create `client/.env.development` or `client/.env.production` locally:

```
VITE_USE_MOCK=true
VITE_API_BASE_URL=https://localhost:44348/
```

## What the app does

- Register a study account, or sign in with a myWealthEd account. A taken username shows the server message and a link to sign in.
- Read one section at a time, with previous and next, completion tracking, and resume.
- Start an overall practice test. Choose how many questions, and whether they must be unseen.
- After each answer, the wrong choice is marked in red and the correct choice in green, with an explanation of every option.
- At the end, the score, percentage, and a row of results. Selecting a mark opens that question again.
- Progress lists every attempt in local date and time, plus average score, questions seen, and a trend.

If a signed-out study call returns an empty 401, the app does not parse that body as JSON. It sends the person to sign in. Percentages such as `50` and `50.0` are formatted in the browser.

If study routes return 404 with the message `Study progress is not available yet.`, progress stays in this browser.

The question bank is local. The server stores the attempt and the answers, not the draw. The browser that started the test keeps the question ids and the shuffled order so a refresh can resume.

Course text extracted from the source pages is in `content/source/`.

See `docs/api-contract.md` for the routes this frontend calls.
