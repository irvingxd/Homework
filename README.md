Automated checkout flow testing for the Muffin Shop using Playwright and TypeScript.


## Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v8.0.0` or higher
* **TypeScript**: `v5.0.0` or higher

##  Setup Instructions
1. **Clone the repo:** `git clone https://github.com/irvingxd/Homework.git`
2. **Install dependencies:** `npm install`
3. **Install browsers:** `npx playwright install`
4. **Install dotenv:** `npm install dotenv --save-dev`

## Note
Setup's #4 should be installed automatically as it is via `npx playwright install` - but in case if it doesn't work, that's the option to proceed.
You can adjust the test_details.env file to your own requirements to test out if it works. Please try to follow aforemention structure, if needed, you are free to adjust 

## Execution
- **Headless mode:** `npx playwright test`
- **Headed mode (UI):** `npx playwright test --headed`
- **View Report:** `npx playwright show-report`

