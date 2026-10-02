import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/* ── Request interceptor (attach auth token) ─────────────────────── */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/* ── Response interceptor (global error handling) ─────────────────── */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = `${import.meta.env.BASE_URL}login`;
    }
    return Promise.reject(error);
  },
);

/* ── End-points ──────────────────────────────────────────────────── */

// Posts
export const fetchPosts = (params?: Record<string, unknown>) =>
  api.get("/posts", { params });
export const fetchPost = (id: string | number) =>
  api.get(`/posts/${id}`);
export const createPost = (data: FormData) =>
  api.post("/posts", data);
export const updatePost = (id: string, data: FormData) =>
  api.put(`/posts/${id}`, data);
export const deletePost = (id: string) =>
  api.delete(`/posts/${id}`);

// Auth
export const login = (credentials: { email: string; password: string }) =>
  api.post("/auth/login", credentials);
export const register = (data: {
  name: string;
  email: string;
  password: string;
}) => api.post("/auth/register", data);
export const getMe = () => api.get("/auth/me");

// Comments (future)
export const fetchComments = (postId: string) =>
  api.get(`/posts/${postId}/comments`);
export const addComment = (postId: string, body: string) =>
  api.post(`/posts/${postId}/comments`, { body });

export default api;
