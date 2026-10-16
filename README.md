# NPTEL Revision Notes Platform

A modern, distraction-free revision notes platform for NPTEL courses, tailored for focused exam revision with concise ~1-page summaries per lecture.

## Features

- **Concise Summaries**: Organized 12-week curriculum with ~3–5 minute reading summaries per lecture.
- **Split-Screen Workspace**: Collapsible 12-week lecture outline on the left and reading canvas with markdown notes rendering on the right.
- **Dark Mode Support**: Seamless toggle between Light and Dark mode with persistence.
- **Community Feedback & Comments**: Interactive feedback modal in the footer and reading toolbar where students can submit ratings and comments.
- **Backend & Database Storage**:
  - Express.js backend API with **MongoDB Atlas** support (`feedbacks` collection) via Mongoose.
  - Zero-setup local JSON fallback storage (`backend/data/feedbacks.json`) if running locally without MongoDB credentials.
- **Vercel + Render Ready**: Pre-configured with `vercel.json` rewrite routing and `render.yaml` blueprint.

---

## Project Structure

```
.
├── backend/                  # Node.js + Express + Mongoose API
│   ├── data/                 # Local JSON fallback storage
│   ├── models/               # Mongoose schemas (Feedback.js)
│   ├── db.js                 # MongoDB connection & fallback handler
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
├── render.yaml               # Render Web Service blueprint
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

> **Note:** If `MONGODB_URI` is not configured, the backend automatically uses `backend/data/feedbacks.json` so you can test immediately without setting up a local database.

### 2. Start the Frontend Application
In a separate terminal window:
```bash
cd frontend
npm install
npm start
```
The React development server will open at `http://localhost:3000`. Requests to `/api/*` are automatically proxied to the backend on port 5000.

---

## Deployment Guide: Frontend on Vercel + Backend on Render + MongoDB Atlas

### Step 1: Set up MongoDB Atlas (Free Cloud Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free M0 cluster.
2. In **Security** → **Database Access**, create a database user (e.g., `nptel_user` with a secure password).
3. In **Security** → **Network Access**, click **Add IP Address** and choose **Allow Access from Anywhere** (`0.0.0.0/0`) so Render can connect.
4. In **Database** → **Connect** → **Drivers** (Node.js), copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/nptel_notes?retryWrites=true&w=majority
   ```
   *(Replace `<username>`, `<password>`, and optionally specify database name `nptel_notes`)*.

---

### Step 2: Deploy Backend on Render
1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** → **Web Service** → Connect your GitHub repository.
3. Configure settings:
   - **Name**: `nptel-notes-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Select **Free**.
4. In **Environment Variables**, add:
   - `MONGODB_URI` = Your MongoDB Atlas connection string from Step 1.
   - `PORT` = `5000`
5. Click **Create Web Service**.
6. Once deployed, copy your backend URL (e.g. `https://nptel-notes-backend.onrender.com`).

---

### Step 3: Deploy Frontend on Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New...** → **Project**.
2. Select your repository `NPTEL-Lecture-Notes`.
3. In the setup screen:
   - **Root Directory**: Click `Edit` and select **`frontend`**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Expand **Environment Variables** and add:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: Your Render backend URL (e.g., `https://nptel-notes-backend.onrender.com`).
5. Click **Deploy**.

---

## MongoDB Schema / Document Structure

The Mongoose model ([`backend/models/Feedback.js`](./backend/models/Feedback.js)) automatically manages the collection:

```json
{
  "_id": "ObjectId('6711...')",
  "name": "Anonymous Student",
  "comments": "Great notes for revision!",
  "rating": 5,
  "createdAt": "2026-10-16T14:00:54.183Z",
  "updatedAt": "2026-10-16T14:00:54.183Z"
}
```

---

## Testing

To run the automated test suite in the frontend:
```bash
cd frontend
npm test -- --watchAll=false
```
All 12 unit and integration tests pass with 100% coverage.
