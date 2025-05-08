import {useState,useRef,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {FaComments,FaTimes,FaPaperPlane} from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const mockResponses = {
    "how do i sell my license": "To sell your license, simply fill out our contact form with your license details. We'll evaluate it and get back to you within 24 hours with a competitive offer.",
    "what types of licenses": "We accept enterprise licenses from major providers including Microsoft, Adobe, Oracle, SAP, and many others. Each license is evaluated individually for maximum value.",
    "how long does it take": "The typical process takes 3-5 business days from submission to payment. Enterprise deals may take longer depending on complexity.",
    "is it secure": "Yes, we use enterprise-grade encryption and secure escrow services to protect all transactions. Your data security is our top priority.",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const query = input.toLowerCase();
    const response = mockResponses[query] || 
      "I'm happy to help! Please rephrase your question or contact our support team for more specific assistance.";

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response
      }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="position-fixed bottom-0 end-0 mb-4 me-4 bg-white rounded-3 shadow-lg"
            style={{ width: '300px', maxHeight: '500px', zIndex: 1000 }}
          >
            <div className="p-3 border-bottom bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Chat Support</h5>
              <button 
                className="btn btn-link text-white p-0"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-3" style={{ height: '350px', overflowY: 'auto' }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 d-flex ${
                    message.type === 'user' ? 'justify-content-end' : 'justify-content-start'
                  }`}
                >
                  <div
                    className={`p-2 rounded-3 ${
                      message.type === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-light'
                    }`}
                    style={{ maxWidth: '80%' }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={input.toLowerCase}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4"
          style={{ width: '60px', height: '60px', zIndex: 1000 }}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaComments size={24} />
        </motion.button>
      )}
    </>
  );
};

export default ChatWidget;
