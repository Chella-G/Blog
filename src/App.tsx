import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const Post = lazy(() => import("./pages/Post").then((m) => ({ default: m.Post })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Login = lazy(() => import("./pages/Login").then((m) => ({ default: m.Login })));
const Register = lazy(() =>
  import("./pages/Register").then((m) => ({ default: m.Register })),
);

const LegacyPrefixRedirect = () => {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/^\/Blog/, "") || "/";
  return (
    <Navigate to={`${cleanPath}${location.search}${location.hash}`} replace />
  );
};

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
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Handle any legacy /Blog prefix in dev gracefully */}
              <Route path="/Blog/*" element={<LegacyPrefixRedirect />} />
              <Route path="*" element={<Navigate to="/" replace />} />
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
