# Playwright Automation Assignment

This project contains UI and API automation using Playwright with JavaScript.

## Tech Stack

- Playwright
- JavaScript
- Node.js

---

# UI Automation

## Scenario Covered

- Navigate to DemoQA
- Login with existing user
- Search for book:
  - Learning JavaScript Design Patterns
- Validate search result
- Print Title, Author and Publisher into a text file
- Logout successfully

---

# API Automation

## API Used

https://reqres.in/

## Scenarios Covered

- Create User
- Validate response status code
- Store user ID
- Update user details
- Validate updated response

---

# Project Structure

```bash
PLAYWRIGHT_ASSIGNMENT_TASK/
│
├── pages/
├── tests/
├── utils/
├── testData/
├── playwright.config.js
├── package.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <repo_url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Environment Variable Setup

Create a `.env` file in project root:

```env
API_KEY=YOUR_REQRES_API_KEY
```

---

# Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific API test:

```bash
npx playwright test tests/reqres_api.spec.js
```

Run headed mode:

```bash
npx playwright test --headed
```

---

# Notes

- ReqRes is a mock API.
- Created users are not permanently stored.
- API key is stored using environment variables for security.
