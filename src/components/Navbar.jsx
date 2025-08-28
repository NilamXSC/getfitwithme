import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [alpha, setAlpha] = useState(0.38);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, 200);
      const a = 0.38 - (y / 200) * 0.20;
      setAlpha(Number(a.toFixed(3)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goPlans() {
    if (location.pathname !== "/") navigate("/");
    setTimeout(() => {
      document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="shell mt-3 rounded-b-2xl px-6 sm:px-8 py-3 flex items-center justify-between backdrop-blur border border-white/10 soft-shadow transition-all"
        style={{ background: `rgba(0,0,0,${alpha})` }}
      >
        {/* Brand logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Get Fit"
            className="h-[56px] w-auto object-contain mix-blend-screen"
          />
          <span className="sr-only">Get Fit</span>
        </Link>

        {/* Desktop actions */}
        <div className="hidden sm:flex items-center gap-5">
          <button onClick={goPlans} className="btn btn-outline focus-ring">Register</button>
          <Link to="/dashboard" className="btn" style={{ background: "var(--accent-2)", color: "#000" }}>
            View Dashboard
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 hover:bg-white/10"
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="sm:hidden shell mt-2 z-50">
          <div className="card card-pad soft-shadow">
            <button onClick={goPlans} className="block py-2 text-left w-full">Register</button>
            <Link to="/dashboard" className="block py-2">View Dashboard</Link>
          </div>
        </div>
      )}
    </header>
  );
}
