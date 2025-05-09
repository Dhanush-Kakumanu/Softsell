import {useState,useRef,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {FaComments,FaTimes,FaPaperPlane} from 'react-icons/fa';
import {OpenAI} from "langchain";
import {BufferMemory} from "langchain/memory";

const memory = new BufferMemory();
const model = new OpenAI({
  apiKey: "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",
  modelName: "gpt-3.5-turbo"
});

const ChatWidgetAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');

    setMessages(prev => [...prev, { type: 'bot', content: "Typing...", isTemp: true }]);

    try {
      const response = await model.call(input, { memory });
      setMessages(prev => prev.filter(msg => !msg.isTemp));
      setMessages(prev => [...prev, { type: 'bot', content: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', content: "Oops! Something went wrong. Try again later." }]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="chat-box">
            <div className="chat-header">
              <h5>Chat Support</h5>
              <button onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>
            <div className="chat-body">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <p>{message.content}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="chat-input">
              <input type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button onClick={() => setIsOpen(true)} className="btn btn-primary">
          <FaComments size={24} />
        </motion.button>
      )}
    </>
  );
};

export default ChatWidgetAI;