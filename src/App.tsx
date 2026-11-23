import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { paths } from "./routes";

const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const Post = lazy(() => import("./pages/Post").then((m) => ({ default: m.Post })));
const Login = lazy(() => import("./pages/Login").then((m) => ({ default: m.Login })));
const Register = lazy(() =>
  import("./pages/Register").then((m) => ({ default: m.Register })),
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound })),
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>
            <Suspense fallback={null}>
              <Routes>
                <Route path={paths.home} element={<Blog />} />
                <Route path={`${paths.postBase}/:slug`} element={<Post />} />
                <Route path={paths.login} element={<Login />} />
                <Route path={paths.register} element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
