import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import home_lap from "../assets/images/home-lap.jpeg"

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <main className="relative min-h-screen overflow-hidden bg-slate-50">
        {" "}
        {/* Background blur accents */}{" "}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />{" "}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" />{" "}
        {/* Hero container */}{" "}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
          {" "}
          <div className="glass-card p-8">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {" "}
              {/* Left content */}{" "}
              <div>
                {" "}
                <h1 className="text-5xl font-semibold text-slate-900 leading-tight mb-6">
                  {" "}
                  Learn Smarter. <br /> Not Harder.{" "}
                </h1>{" "}
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  {" "}
                  Smart Study Assistant transforms your study materials into
                  interactive conversations. <br /> Summarize complex topics,
                  ask questions, and quiz yourself — all powered by AI.{" "}
                </p>{" "}
                <Link
                  to="/auth/login"
                  className=" inline-flex items-center justify-center px-10 py-4 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 hover:shadow-lg transition "
                >
                  {" "}
                  Get Started{" "}
                </Link>{" "}
              </div>{" "}
              {/* Right visual */}{" "}
              <div className="relative">
                {" "}
                <img
                  src={home_lap}
                  alt="Smart Study Assistant AI Interface"
                  className=" rounded-2xl shadow-md w-full object-cover "
                />{" "}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
    </>
  );
}
