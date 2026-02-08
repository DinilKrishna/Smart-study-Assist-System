export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Your Chats</h1>
      <button className="px-4 py-2 bg-black text-white rounded">
        Start a New Chat
      </button>
      <div className="mt-4 text-gray-500">
        Older chats will appear here (dummy for now)
      </div>
    </div>
  );
}
