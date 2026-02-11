import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import s from "../../assets/images/s.png";
import user_image from "../../assets/images/user.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logoutUser } from "../../store/auth/authThunks";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);


  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);


  const handleLogout = () => {
    dispatch(logoutUser());
    setOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-900 text-slate-100 relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={s} alt="Smart Study Assistant" className="w-9 h-9 rounded" />
            <span className="text-lg font-semibold tracking-wide">
              Smart Study Assistant
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-slate-300 hover:text-white">
              Home
            </Link>
            <Link to="/features" className="text-sm text-slate-300 hover:text-white">
              Features
            </Link>
            <Link to="/about" className="text-sm text-slate-300 hover:text-white">
              About
            </Link>

            {!isAuthenticated ? (
              <Link to="/auth/login" className="btn btn-primary">
                Login
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setOpen(!open)} className="cursor-pointer">
                  <img
                    src={user_image}
                    alt="User profile"
                    className="w-9 h-9 rounded-full border border-slate-700"
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-44 bg-slate-800 rounded-md shadow-lg py-2">
                    <Link to="/profile" className="block w-full px-4 py-2 text-sm hover:bg-slate-700 transition text-left cursor-pointer">
                      Profile
                    </Link>
                    <Link to="/settings" className="block w-full px-4 py-2 text-sm hover:bg-slate-700 transition text-left cursor-pointer">
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition cursor-pointer text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-slate-900 text-slate-100 z-50
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-4">
          <button
            className="self-end text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>

          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>

          <div className="border-t border-slate-700 my-2" />

          {!isAuthenticated ? (
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          ) : (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 transition cursor-pointer text-left">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
