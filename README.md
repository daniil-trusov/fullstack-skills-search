# How to Run

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

# Features

- Skill autocomplete with keyboard navigation;
- `Clear all` button appear if there are more than 1 skill selected;
- Profiles sorted by skill relevance and rating;
- Loading, error, and no-results states on the search page;
- No additional API calls for the profile page (profiles are loaded via `navigate.state`);
- Skills list stored as a constant for easy access and editing;
- Components are modular, reusable, and easily maintainable.

---

# Possible Improvements
- Replace `SkillCloud` with a more suitable and effective component;
- Improve ProfileCard visual for grid;
- Add the possibility to open a profile directly via `profile/:id` and fetch profile by id from the backend;
- Add additional options for filtering and sorting: by city, rating, or name in ASC and DESC order;
- Replace hardcoded API address with `.env`.
