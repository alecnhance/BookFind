# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A dark-themed audiobook recommender web app built as a Father's Day gift to accompany Audible credits. Full product spec is in `SPEC.md`.

**GitHub**: https://github.com/alecnhance/BookFind.git  
**Default branch**: `main`

## Commands

```bash
npm run dev      # local dev server (Vite)
npm run build    # production build → dist/
npm run start    # serve built output (used by Railway: vite preview --port $PORT --host)
```

No test runner is configured yet. No lint config yet.

## Stack

- React + Vite, React Router v6, Tailwind CSS
- Google Books API (unauthenticated) — no `.env` file needed
- Deployed on Railway via `npm run build` + `npm start`

## Architecture

Book data flows through a single service layer (`src/services/googleBooks.js`) that exposes four methods: `search`, `bySubject`, `getById`, and `moreLikeThis`. The `useBooks` hook in `src/hooks/useBooks.js` wraps these calls with loading/error state and an in-memory cache keyed by query string.

Personal picks are a static array in `src/data/personalPicks.js` (not fetched from an API). Each entry can have an optional direct `audibleUrl`; all other books get a constructed Audible search link: `https://www.audible.com/search?keywords={title}+{author}`.

### User flow

Home (`/`) → Start (`/start`) → two paths:
1. **Series path**: `/series` (pick a series) → `/series/:slug` (reading order + Audible CTA)
2. **Quiz path**: `/quiz` → branching questions → Google Books API results

### Quiz architecture

The quiz (`/quiz`) is a branching discovery tool that finds books via the Google Books API — **not** from `personalPicks`. It has two tracks based on Q1:

- **Fiction** (5 questions total): format → genre → mood → length → pace
- **Non-Fiction** (4 questions total): format → subject → style → depth

`src/data/quizData.js` exports:
- `COMMON_QUESTIONS`, `FICTION_QUESTIONS`, `NONFICTION_QUESTIONS` — question arrays
- `getQuestions(answers)` — returns the active question list based on answers so far
- `buildQuery(answers)` — maps completed answers to a Google Books search string

`Quiz.jsx` tracks `answers` (object keyed by question id) and `currentIndex`. The question list is derived dynamically via `getQuestions(answers)` each render, enabling branching. Back navigation un-answers the previous question and decrements the index; from Q1 it navigates to `/start`.

`QuizResult.jsx` receives a `query` string and calls `useBooks(() => googleBooks.search(query), [query])` to fetch results. Shows loading skeletons, error state, or 3 result cards with Audible links.

### Series architecture

`src/data/series.js` — three series objects with slug, name, author, bookCount, completed, hook, coverBookId (references personalPicks id), bookIds[].

`SeriesPicker.jsx` maps `seriesList` → cover images from `personalPicks`. `SeriesDetail.jsx` shows a blurred hero banner, "Start here" featured card for Book 1, and a reading order grid.

## Design Tokens

Background `#111827`, cards `#1f2937`, accent amber `#f59e0b`, text `#f9fafb` / `#9ca3af`. Defined via Tailwind CSS v4 `@theme {}` block in `src/index.css` (no `tailwind.config.js`).
