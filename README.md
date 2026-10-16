# NPTEL Revision Notes Platform

A modern, distraction-free revision notes platform for NPTEL courses, tailored for focused exam revision with concise ~1-page summaries per lecture.

## Features

- **Concise Summaries**: Organized 12-week curriculum with ~3–5 minute reading summaries per lecture.
- **Split-Screen Workspace**: Collapsible 12-week lecture outline on the left and reading canvas with markdown notes rendering on the right.
- **Dark Mode Support**: Seamless toggle between Light and Dark mode with persistence.
- **Community Feedback & Comments**: Interactive feedback modal in the footer and reading toolbar where students can submit ratings, comments, and topic requests.
- **Backend & Database Storage**:
  - Express.js backend API with PostgreSQL support (`feedbacks` table) for production on Render.
  - Zero-setup local JSON fallback storage (`backend/data/feedbacks.json`) if running locally without a database.
- **Production Ready for Render**: Pre-configured with `render.yaml` Infrastructure-as-Code blueprint.

---

## Project Structure

```
.
├── backend/                  # Node.js + Express API
│   ├── data/                 # Local JSON fallback storage
│   ├── db.js                 # PostgreSQL connection & auto-migration
│   ├── server.js             # API routes (/api/health, /api/feedback)
│   ├── package.json
│   └── .env.example
├── frontend/                 # React 18 + Tailwind CSS
│   ├── public/
│   ├── src/
│   │   ├── components/       # UI, Layout, Course, Notes, Feedback
│   │   ├── data/             # 12-week course and lecture metadata
│   │   ├── notes/            # Markdown lecture notes (e.g. logistics)
│   │   ├── services/         # Notes loader & API client
│   │   └── App.jsx           # Client router and theme provider
│   └── package.json
├── render.yaml               # 1-Click Render Blueprint configuration
└── README.md
```

---

## Running Locally

### 1. Start the Backend API
```bash
cd backend
npm install
npm start
```
The backend will run on `http://localhost:5000`.
- Health check: `http://localhost:5000/api/health`
- Feedback API: `http://localhost:5000/api/feedback`

> **Note:** If `DATABASE_URL` is not set in `.env`, the backend automatically saves feedbacks to `backend/data/feedbacks.json`.

### 2. Start the Frontend Application
In a separate terminal window:
```bash
cd frontend
npm install
npm start
```
The React development server will open at `http://localhost:3000`. Requests to `/api/*` are automatically proxied to the backend on port 5000.

---

## Deploying to Render (with PostgreSQL)

This repository includes a [`render.yaml`](./render.yaml) blueprint file that configures:
1. **Free PostgreSQL Database**: `nptel-notes-db`
2. **Backend Web Service**: `nptel-notes-backend`
3. **Frontend Static Site**: `nptel-notes-frontend`

### Option A: 1-Click Blueprint (Recommended)

1. Push this project to your GitHub repository.
2. Log in to [Render](https://render.com).
3. In the Render Dashboard, click **New +** → **Blueprint**.
4. Connect your GitHub repository.
5. Render will detect [`render.yaml`](./render.yaml) and automatically create:
   - The PostgreSQL database.
   - The backend web service with `DATABASE_URL` connected.
   - The frontend static site connected to the backend API.
6. Click **Apply**. Render will build and deploy both services!

---

### Option B: Manual Setup on Render

If you prefer setting up services individually on the Render dashboard:

#### Step 1: Create PostgreSQL Database
1. In Render Dashboard, click **New +** → **PostgreSQL**.
2. Name it `nptel-notes-db` and select the **Free** plan.
3. Once created, copy the **Internal Database URL** (or External if connecting remotely).

#### Step 2: Deploy Backend Web Service
1. Click **New +** → **Web Service** → Connect your repository.
2. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
3. Under **Environment Variables**, add:
   - `DATABASE_URL` = Paste your database URL from Step 1.
   - `PORT` = `5000`
4. Click **Create Web Service**. Copy your backend URL (e.g. `https://nptel-notes-backend.onrender.com`).

#### Step 3: Deploy Frontend Static Site
1. Click **New +** → **Static Site** → Connect your repository.
2. Set:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
3. Under **Environment Variables**, add:
   - `REACT_APP_API_URL` = Your backend URL from Step 2 (e.g. `https://nptel-notes-backend.onrender.com`).
   - `REACT_APP_GITHUB_REPO_URL` = Your GitHub repository link (optional).
4. Under **Redirects/Rewrites**, add a rewrite:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
5. Click **Create Static Site**.

---

## Database Schema (PostgreSQL)

The backend auto-initializes the table on startup:

```sql
CREATE TABLE IF NOT EXISTS feedbacks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  comments TEXT NOT NULL,
  course VARCHAR(120) DEFAULT 'General',
  rating INT DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## Testing

To run the automated test suite in the frontend:
```bash
cd frontend
npm test -- --watchAll=false
```
All 12 unit and integration tests pass with 100% coverage on core course navigation, notes rendering, feedback modal, and footer components.
