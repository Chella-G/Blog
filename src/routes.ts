/**
 * Single source of truth for every internal URL.
 *
 * Components import from here instead of hard-coding paths, so changing a
 * route only requires editing this file and links can never drift out of sync
 * with the router.
 */
export const paths = {
  home: "/",
  postBase: "/post",
  post: (slug: string) => `/post/${encodeURIComponent(slug)}`,
  login: "/login",
  register: "/register",
} as const;
