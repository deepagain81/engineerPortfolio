# Deepak Chapagain - Engineer Portfolio

A **mobile-first, production-grade** portfolio site built with **React + TypeScript + Vite**.  
Selected work is framed as **mini case studies**: *problem → approach → measurable impact*.

**Live:** [deepakchapagain.com](URL)  
**Resume:** [/resume.pdf](URL)

---

## Preview

![Preview — mobile](./docs/preview-mobile.png)
![Preview — desktop](./docs/preview-desktop.png)

---

## What you will find

- Clean, responsive UI (mobile-first)
- Dark/Light theme + subtle motion polish
- Case-study project cards (problem/approach/impact)
- A11y-minded development (eslint jsx-a11y + optional runtime checks)
- PR quality gates (format + lint + typecheck)

---



## Tech stack

- **React 18 + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Animations:** Framer Motion
- **Icons:** lucide-react + react-icons
- **Code quality:** ESLint + Prettier + TypeScript project references (`tsc -b`)
- **A11y tooling:** eslint-plugin-jsx-a11y + @axe-core/react
- **Git hooks:** Husky + lint-staged

---

## Quality gate (What I enforce)

This repo is set up with quality checks designed to match how teams ship production UI:

- **Lint:** `eslint .`
- **Formatting:** `prettier . --check`
- **Type safety:** `tsc -b --noEmit`
- **One-command quality gate:** `npm run quality` → lint + format check + typecheck

> Recommended GitHub settings:
> - **Squash merge only**
> - **Require status checks to pass before merge**
> - Require PR (and at least 1 approval if you collaborate)


Common commands:

```bash
npm run quality        # lint + format:check + typecheck
npm run quality:fix    # prettier --write + eslint --fix + typecheck
```


---

## Requirements

- **Node:** `>=20 <25` (see `package.json`)
- Package manager: **npm**

---

## Getting started

```bash
npm ci
npm run dev
```
Open the local URL Vite prints (typically `http://localhost:5173`).


Build & preview:

```bash
npm run build
npm run preview
```

---

## Structure & customization

Project structure:

```txt
src/
  components/        # reusable UI components
  data/              # site content and constants
  sections/          # page sections (hero, projects, experience, contact)
public/
  resume.pdf         # static resume file
.github/workflows/   # CI: format/lint/typecheck on PRs
index.css            # global styles / tokens
```

Quick edits:
- Update **site metadata** (title/description/OG): `index.html`
- Update **content** (hero, projects, experience): `src/data/`
- Update **social links**: `src/data`
- Replace **resume**: `public/resume.pdf`


---


## About

I am **Deepak Chapagain**, a computer engineer with **~6+ years** of industry experience building **React / React Native** products with pragmatic architecture, measurable outcomes, and quality guardrails.

Currently: **Technology Analyst at Tractor Supply Company (TSC)** (Brentwood, TN).  
Previously: **Southern California Edison**.

---

## Contact

Want to discuss a role, a contract, or a collaboration? **Email is best.**

- Email: dchapagain.dev@gmail.com
- LinkedIn: [https://www.linkedin.com/in/dchapagain/](URL)
- GitHub: [https://github.com/deepagain81](URL)

---

## License

- **Code:** MIT (see `LICENSE`)
- **Personal content (resume, bio/project writeups, images/logo):** All rights reserved (see `CONTENT_LICENSE.md`)

If you publish a fork/derivative, please **remove/replace all personal content** first.


---


