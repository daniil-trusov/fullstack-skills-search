# SKILL-BASED SEARCH APP

## DESCRIPTION

This project not only recreates the mockup design with a fully responsive layout across all screen sizes but also provides modular, functional, and easily extendable components to simplify future development.

## TECH STACK

Frontend Tech Stack:

- Vite – development and build tool for modern frontend workflows;
- React – component-based library for building dynamic and interactive UIs;
- Tailwind CSS – utility-first CSS framework for rapidly building custom, responsive designs within markup;
- TypeScript – adds static typing to JS, improving code reliability, readability and refactoring safety;
- Axios – promise-based HTTP client for making API requests;

Backend Tech Stack:

- Node.js & Express – Server runtime and framework for building REST APIs;
- TypeScript – Enables type safety on the backend for more reliable code;
- CORS – Middleware to allow cross-origin resource sharing.

## HOW TO RUN

1. Open console and execute commands:

```bash
npm run setup
npm run server
```

2. Open a new console and execute:

```bash
npm run dev
```

3. Check the application in your browser.

---

# FEATURES

- Skill autocomplete with keyboard navigation;
- `Clear all` button appear if there are more than 1 skill selected;
- Profiles sorted by skill relevance and rating;
- Loading, error, and no-results states on the search page;
- No additional API calls for the profile page (profiles are loaded via `navigate.state`);
- Skills list stored as a constant for easy access and editing;
- Components are modular, reusable, and easily maintainable.

---

# POSSIBLE IMPROVEMENTS
- Replace `SkillCloud` with a more suitable and effective component;
- Improve ProfileCard visual for grid;
- Add the possibility to open a profile directly via `profile/:id` and fetch profile by id from the backend;
- Add additional options for filtering and sorting: by city, rating, or name in ASC and DESC order;
- Replace hardcoded API address with `.env`.
