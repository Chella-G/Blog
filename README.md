<div align="center">

<h1>Anony.blog</h1>

<h3>A responsive personal blog for sharing ideas about software, clean code, and the web.</h3>

<p>
  <img src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white" alt="Vite 8" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" /></a>
</p>

<p>
  <a href="https://chella-g.github.io/Blog/">Live demo</a>
  · <a href="#getting-started">Get started</a>
  · <a href="#writing-a-post">Write a post</a>
  · <a href="#contributing">Contributing</a>
</p>

</div>

## About

Anony.blog is a frontend-first blog project built with React and TypeScript. It provides a responsive reading experience, Markdown-based articles, and a customizable theme. The codebase is intended to be approachable for developers who are learning React, TypeScript, or how a small content-driven website is structured.

## Features

- Responsive home, blog, article, and About pages.
- Searchable post list backed by local JSON metadata.
- Markdown articles with syntax-highlight-friendly code blocks, a table of contents, and clickable images.
- Light and dark themes, plus controls for accent color and font settings.
- Shared navigation, social links, and footer.
- Login and registration page designs, ready to connect to a backend.

## Built with

- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for local development and production builds
- [React Router](https://reactrouter.com/) for page navigation
- [styled-components](https://styled-components.com/) for component styling and themes
- [react-markdown](https://github.com/remarkjs/react-markdown) for article content
- [Axios](https://axios-http.com/) for the API client scaffold

## Getting started

### Requirements

- Node.js (an active LTS release is recommended)
- npm

### Install dependencies and start the app

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The development server uses port `5173` by default.

### Build and preview

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the project and create a production build. |
| `npm run preview` | Serve the production build locally. |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch. |

## Writing a post

1. Create a Markdown file in `src/content/posts/`, such as `my-first-post.md`.
2. Add a matching metadata entry to `src/mocks/posts.json`.
3. Set the metadata `file` field to the Markdown filename and give the post a unique `id`.

Example metadata:

```json
{
  "id": "3",
  "slug": "my-first-post",
  "file": "my-first-post.md",
  "title": "My First Post",
  "excerpt": "A short introduction to the article.",
  "author": {
    "name": "Anony",
    "avatar": ""
  },
  "publishedAt": "2026-10-19T12:00:00Z",
  "tags": ["tutorial", "web"],
  "category": "Development",
  "thumbnail": "",
  "readTime": "5 min read"
}
```

Put static images in `public/assets/` and refer to them from Markdown by their public URL, for example:

```md
![Description of the screenshot](/assets/example.png)
```

## Project structure

```text
frontend/
├── src/
│   ├── App.tsx              (Root component, routes, layout)
│   ├── main.tsx             (React entry point)
│   ├── index.css            (Global styles, CSS variables)
│   ├── pages/               (Route-based views)
│   │   ├── Home.tsx         (Hero + featured posts + features grid)
│   │   ├── Blog.tsx         (Post listing with search & category filters)
│   │   ├── Post.tsx         (Single post view, dynamic content loader)
│   │   ├── About.tsx        (Author bio, skills, contact)
│   │   ├── Login.tsx        (Auth form, backend TODO)
│   │   └── Register.tsx     (Auth form, backend TODO)
│   ├── components/
│   │   ├── layout/          (Header, Footer, Container, SocialLinks, ThemeCustomizer)
│   │   ├── post/            (PostCard, PostList, PostDetail)
│   │   └── theme/           (ThemeProvider, dark/light themes, themeSettings, tokens)
│   ├── hooks/
│   │   └── usePosts.ts      (Post fetching logic with mock data)
│   ├── services/
│   │   └── api.ts           (Axios instance + endpoint helpers)
│   ├── content/posts/       (Markdown files for blog posts)
│   ├── mocks/
│   │   └── posts.json       (Mock post metadata)
│   └── utils/
│       └── formatDate.ts    (Date formatting utilities)
├── public/                  (Static assets, favicons, 404 page)
├── dist/                    (Build output)
├── vite.config.ts           (Vite config with GitHub Pages base)
└── tsconfig.json            (TypeScript strict config)
```

## Data and backend status

Post metadata currently comes from `src/mocks/posts.json`, and article bodies are loaded from `src/content/posts/`. `src/services/api.ts` contains an Axios client and endpoint functions, but this project does not include a backend implementation yet. Login and registration forms are UI placeholders and do not create or authenticate accounts.

To point the API client at a backend, set `VITE_REACT_APP_BASE_URL` in `.env.local`. The default API base URL is `/api`. Variables prefixed with `VITE_` are exposed to browser code; never put passwords, private keys, or other secrets in them.

## Deploying to GitHub Pages

The Vite build and package homepage are configured for the `/Blog/` project path. With a configured Git remote and GitHub Pages enabled for the `gh-pages` branch, deploy with:

```bash
npm run deploy
```

For a different repository path or hosting provider, update the `base` setting in `vite.config.ts` and the `homepage` value in `package.json`.

## Contributing

Contributions and learning-focused improvements are welcome. Fork the repository, create a branch for your change, keep updates focused, and open a pull request with a short description of what changed.

## License

Released under the [MIT License](LICENSE).
