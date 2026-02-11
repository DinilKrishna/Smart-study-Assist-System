import Navbar from "../components/layout/Navbar";

const dummyChats = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Study Session ${i + 1}`,
  updated: i === 0 ? "Just now" : `${i + 1} days ago`,
}));

export default function Dashboard() {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <main className="relative bg-slate-50 overflow-hidden h-[calc(100vh-80px)]">
        {" "}
        {/* Background accents */}{" "}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />{" "}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" />{" "}
        {/* IMPORTANT FIX HERE */}{" "}
        <section className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          {" "}
          <div className="w-full glass-card p-8">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {" "}
              {/* Left: New Chat */}{" "}
              <div className="lg:col-span-1 flex flex-col justify-between">
                {" "}
                <div>
                  {" "}
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                    {" "}
                    Start a New Chat{" "}
                  </h2>{" "}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {" "}
                    Upload PDFs, summarize notes, or ask questions directly.
                    Your AI study assistant is ready when you are.{" "}
                  </p>{" "}
                </div>{" "}
                <button className=" w-full py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 hover:shadow-lg transition ">
                  {" "}
                  + New Chat{" "}
                </button>{" "}
              </div>{" "}
              {/* Right: Previous Chats */}{" "}
              <div className="lg:col-span-2 flex flex-col">
                {" "}
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  {" "}
                  Previous Chats{" "}
                </h2>{" "}
                <div
                  className=" flex-1 overflow-y-auto px-4 space-y-3 "
                  style={{ maxHeight: "420px" }}
                >
                  {" "}
                  {dummyChats.map((chat) => (
                    <div
                      key={chat.id}
                      className=" flex items-center justify-between glass-card p-8 transition cursor-pointer "
                    >
                      {" "}
                      <div className="truncate">
                        {" "}
                        <p className="font-medium text-slate-800 truncate">
                          {" "}
                          {chat.title}{" "}
                        </p>{" "}
                        <p className="text-xs text-slate-500">
                          {" "}
                          Updated {chat.updated}{" "}
                        </p>{" "}
                      </div>{" "}
                      <span className="text-slate-400 text-sm ml-4">
                        →
                      </span>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
    </>
  );
}
