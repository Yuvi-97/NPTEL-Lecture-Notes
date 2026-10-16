/**
 * API Service for interacting with NPTEL Notes Backend.
 * Seamlessly resolves between local development (via proxy) and production deployment (Vercel / Render).
 */

const getApiBaseUrl = () => {
  let url = process.env.REACT_APP_API_URL || '';
  if (url) {
    // If host property returns domain without protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    return url.replace(/\/+$/, '');
  }
  return ''; // Default to relative route (handled by CRA proxy in dev or reverse proxy in prod)
};

const API_BASE = getApiBaseUrl();

/**
 * Submit user feedback/comment.
 * @param {Object} data
 * @param {string} data.name - Name of student or contributor
 * @param {string} data.comments - User comment or suggestions
 * @param {number} [data.rating] - Rating between 1 and 5
 */
export async function submitFeedback({ name, comments, rating = 5 }) {
  const url = `${API_BASE}/api/feedback`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name?.trim() || 'Anonymous Student',
      comments: comments.trim(),
      rating: Number(rating) || 5,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.error || `Failed to submit feedback (${response.status})`;
    throw new Error(errorMsg);
  }

  return data;
}

/**
 * Fetch recent student feedback entries.
 * @param {number} [limit=10]
 */
export async function fetchFeedbacks(limit = 10) {
  const url = `${API_BASE}/api/feedback?limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load feedbacks (${response.status})`);
  }

  return response.json();
}
