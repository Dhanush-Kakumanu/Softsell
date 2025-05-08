import {FaSun,FaMoon} from 'react-icons/fa';
import {motion} from 'framer-motion';

const ThemeToggle = ({darkMode,setDarkMode}) => {
  return (
    <motion.button
      initial={{opacity: 0}}
      animate={{opacity:1}}
      className={`position-fixed top-0 end-0 m-3 btn ${
        darkMode ? 'btn-light' : 'btn-dark'
      } rounded-circle d-flex align-items-center justify-content-center`}
      style={{width:'44px',height:'44px',zIndex: 1000}}
      onClick={() => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {darkMode ?<FaSun size={20}/> :<FaMoon size={20}/>}
    </motion.button>
  );
};

export default ThemeToggle;
