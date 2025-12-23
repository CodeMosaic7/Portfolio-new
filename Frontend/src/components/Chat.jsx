import "../styles/Chat.css";

const Chat = () => {
  return (
    <section className="chat">
      <h1 className="chat-title">Chat with my digital twin 🤖</h1>

      <div className="chat-box">
        <div className="chat-messages">
          {/* Chat messages will go here */}
        </div>

        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
        />

        <button className="chat-send">Send</button>
      </div>
    </section>
  );
};

export default Chat;
