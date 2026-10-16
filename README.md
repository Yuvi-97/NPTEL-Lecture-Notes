# NPTEL Revision Notes Platform

A modern, distraction-free revision notes platform for NPTEL courses, tailored for focused exam revision with concise ~1-page summaries per lecture.

## Features

- **Concise Summaries**: Organized 12-week curriculum with ~3–5 minute reading summaries per lecture.
- **Split-Screen Workspace**: Collapsible 12-week lecture outline on the left and reading canvas with markdown notes rendering on the right.
- **Dark Mode Support**: Seamless toggle between Light and Dark mode with persistence.
- **Community Feedback & Comments**: Interactive feedback modal in the footer and reading toolbar where students can submit ratings and comments.
- **Backend & Database Storage**:
  - Express.js backend API with PostgreSQL support (`feedbacks` table) for production on Render.
  - Zero-setup local JSON fallback storage (`backend/data/feedbacks.json`) if running locally without a database.
- **Vercel + Render Ready**: Pre-configured with `vercel.json` rewrite routing and `render.yaml` blueprint.

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
│   ├── vercel.json           # Client-side routing configuration for Vercel
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

## Deployment Guide: Frontend on Vercel + Backend on Render

This is the recommended, high-performance production setup:
- **Backend + PostgreSQL**: Hosted on [Render](https://render.com) (free tier).
- **Frontend**: Hosted on [Vercel](https://vercel.com) (fast global CDN, free tier).

---

### Step 1: Deploy Backend & Database on Render

1. Log in to [Render](https://dashboard.render.com/).

#### A. Create the PostgreSQL Database
1. Click **New +** → **PostgreSQL**.
2. **Name**: `nptel-notes-db`
3. **Database**: `nptel_notes`
4. **User**: `nptel_user`
5. **Plan**: Select **Free**.
6. Click **Create Database**.
7. Once created, copy the **Internal Database URL** (e.g. `postgresql://nptel_user:...@dpg-...-a/nptel_notes`).

#### B. Create the Backend Web Service
1. Click **New +** → **Web Service** → Connect your GitHub repository.
2. Configure settings:
   - **Name**: `nptel-notes-backend`
   - **Region**: Same region as your database
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Select **Free**.
3. Under **Environment Variables**, add:
   - `DATABASE_URL` = Paste your database URL from Step 1A.
   - `PORT` = `5000`
4. Click **Create Web Service**.
5. Once deployed, copy your backend public URL (e.g., `https://nptel-notes-backend.onrender.com`).
   - You can verify it by opening `https://nptel-notes-backend.onrender.com/api/health` in your browser.

---

### Step 2: Deploy Frontend on Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New...** → **Project**.
3. Import your GitHub repository (`NPTEL-Lecture-Notes`).
4. Configure project settings:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: Click `Edit` and select `frontend`.
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Under **Environment Variables**, add:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: Your Render backend URL from Step 1B (e.g., `https://nptel-notes-backend.onrender.com`).
   - **Key**: `REACT_APP_GITHUB_REPO_URL` *(optional)*
   - **Value**: Your GitHub repository URL.
6. Click **Deploy**.

Vercel will build and deploy your frontend in seconds. Routing works automatically thanks to the included [`frontend/vercel.json`](./frontend/vercel.json).

---

## Database Schema (PostgreSQL)

The backend auto-initializes the table on startup:

```sql
CREATE TABLE IF NOT EXISTS feedbacks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  comments TEXT NOT NULL,
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
