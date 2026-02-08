import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { EyeIcon } from "../../components/icons/EyeIcons";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/auth/authThunks";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading } = useAppSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate("/dashboard");
    } catch {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-[calc(100vh-68px)] bg-slate-50 overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" />

        <section className="relative z-10 flex items-center justify-center pt-24 px-6">
          <div className="w-full max-w-md glass-card p-8">
            <h1 className="text-2xl font-semibold text-slate-900 mb-2">
              Welcome back
            </h1>
            <p className="text-slate-600 mb-8">
              Login to continue your study sessions
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>

                <div className="relative">
                  <input
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 pr-11 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-sm text-slate-600 text-center mt-6">
              Don’t have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
