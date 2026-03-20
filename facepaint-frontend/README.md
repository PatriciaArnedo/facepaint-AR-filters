# facepaint frontend

## Overview

This is the Vite + React frontend for facepaint, an AR drawing app that lets users create and try on hand-drawn face filters.

## Prerequisites

- Node.js
- npm
- The backend API running locally on `http://localhost:3000`

This frontend uses:

- Vite
- React 17
- Redux
- React Router
- [Jeeliz Facefilter](https://github.com/jeeliz/jeelizFaceFilter)
- [Atrament](https://github.com/jakubfiala/atrament.js?utm_source=designernewshttps://github.com/jakubfiala/atrament.js?utm_source=designernews)

## Local Setup

From the facepaint directory:

```bash
cd /facepaint-frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will print the local dev URL in the terminal, typically:

```text
http://localhost:5173
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Backend Connection

The frontend reads the backend base URL from:

```text
import.meta.env.REACT_APP_BASE_URL
```

If that variable is not set, it defaults to:

```text
http://localhost:3000
```

So for local development, the usual flow is:

1. Start the Rails backend on `http://localhost:3000`
2. Start the frontend with `npm run dev`

If you need to point the frontend at a different backend, set `REACT_APP_BASE_URL` before starting Vite.

## Camera Notes

The AR camera and filter drawing flow depend on:

- Browser camera permissions
- A secure local context such as `localhost`
- Jeeliz FaceFilter
- Atrament

If the camera is not working, check the browser console first for startup errors from the face filter code.

## User Stories

Here is a sample of the filter drawing interface:

![A GIF sample of a filter being drawn.](https://i.imgur.com/3u574f8.gif)

1. A user can sign up for an account and log in/log out.
2. A user can create a face filter.
3. A user can delete a face filter.
4. A user can try on face filters.
5. A user can save their favorite face filters.
6. A user can upload a profile picture.
7. A user can visit other users' accounts and browse their filters.
