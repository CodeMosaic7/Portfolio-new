const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Chat With my digital twin here!</h1>
      <div className="border border-gray-300 rounded p-4 h-64 overflow-y-auto">
        {/* Chat messages will go here */}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full mt-4 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Chat;