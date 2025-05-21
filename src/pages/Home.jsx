import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { getIcon } from '../utils/iconUtils';
import MainFeature from '../components/MainFeature';

const TvIcon = getIcon('tv');
const InfoIcon = getIcon('info');

function Home() {
  const [showInfo, setShowInfo] = useState(false);
  
  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      <header className="text-center mb-8 md:mb-12">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <TvIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ScreenBuff
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-surface-700 dark:text-surface-300 max-w-2xl mx-auto"
        >
          Test your knowledge of Friends, Modern Family, and Harry Potter with our trivia challenge!
        </motion.p>
        
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          onClick={toggleInfo}
          className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-surface-200 dark:bg-surface-800 hover:bg-surface-300 dark:hover:bg-surface-700 transition-colors"
        >
          <InfoIcon className="w-4 h-4" />
          <span>{showInfo ? "Hide Info" : "How to Play"}</span>
        </motion.button>
        
        {showInfo && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-surface-100 dark:bg-surface-800 rounded-xl text-left max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold mb-2">How to Play:</h3>
            <ul className="list-disc list-inside space-y-1 text-surface-700 dark:text-surface-300">
              <li>Select a category: Friends, Modern Family, or Harry Potter</li>
              <li>Answer 10 multiple-choice questions</li>
              <li>Get immediate feedback on your answers</li>
              <li>Try to beat your high score!</li>
            </ul>
          </motion.div>
        )}
      </header>

      <main>
        <MainFeature />
      </main>
      
      <footer className="mt-12 pt-6 border-t border-surface-200 dark:border-surface-800 text-center text-surface-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ScreenBuff. All trivia questions for entertainment purposes only.
        </p>
      </footer>
    </div>
  );
}

export default Home;