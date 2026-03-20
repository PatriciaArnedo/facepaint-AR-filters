# facepaint backend

## Overview

This is the Rails API backend for facepaint, an AR drawing app that lets users create hand-drawn face filters.

## Prerequisites

- Ruby `3.2.1`
- Bundler
- PostgreSQL running locally

## Local Setup

From your local facepaint directory:

```bash
cd facepaint-backend
bundle install
```

Prepare the database:

```bash
bin/rails db:prepare
```

Start the server:

```bash
bin/rails server
```

The API runs at:

```text
http://localhost:3000
```

## Frontend Connection

The frontend defaults to this backend URL in development:

```text
http://localhost:3000
```

In the frontend code, the API base URL comes from `import.meta.env.REACT_APP_BASE_URL` and falls back to `http://localhost:3000` if that variable is not set.

If you are running the frontend locally on Vite, start the backend first, then start the frontend. The frontend should be able to call this API without extra setup as long as the backend is running on port `3000`.

This backend includes routes for:

- users
- login
- filters
- save_filters

## User Stories

1. A user can sign up for an account and log in/log out.
2. A user can create a face filter.
3. A user can delete a face filter.
4. A user can try on face filters.
5. A user can save their favorite face filters.
6. A user can upload a profile picture.
7. A user can visit other users' accounts and browse their filters.
