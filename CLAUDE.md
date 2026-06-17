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

All pages consume `BookGrid` + `BookCard` as the shared display layer — API results and static personal picks both normalize to the same shape before reaching these components.

Personal picks are a static array in `src/data/personalPicks.js` (not fetched from an API). Each entry can have an optional direct `audibleUrl`; all other books get a constructed Audible search link: `https://www.audible.com/search?keywords={title}+{author}`.

The Mood Quiz (`/quiz`) maps 4 answers to a Google Books `subject:` query — the mapping logic lives in `QuizResult.jsx`.

## Design Tokens

Background `#111827`, cards `#1f2937`, accent amber `#f59e0b`, text `#f9fafb` / `#9ca3af`. All defined in `tailwind.config.js` as custom theme extensions so they can be used as Tailwind classes throughout.
