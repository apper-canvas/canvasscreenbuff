import { motion } from 'framer-motion';
import { hogwartsLogo, hogwartsHouses } from '../../assets/images';
import { getIcon } from '../../utils/iconUtils';

const WandIcon = getIcon('wand');
const SparklesIcon = getIcon('sparkles');
const CandleIcon = getIcon('flame');
const BookIcon = getIcon('book');
const BroomIcon = getIcon('broom');

const HarryPotterTheme = ({ children, isActive = false }) => {
  if (!isActive) return children;

  return (
    <div className="harrypotter-theme relative overflow-hidden">
      {/* Background elements with magical ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-harrypotter/5 to-surface-900/80 dark:from-harrypotter/10 dark:to-surface-900/95 z-0 overflow-hidden">
        {/* Hogwarts logo */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10 dark:opacity-15"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hogwartsLogo}
            alt="Hogwarts"
            className="w-48 h-auto"
          />
        </motion.div>
        
        {/* Floating wand with magical effects */}
        <motion.div
          className="absolute bottom-20 right-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <WandIcon className="w-16 h-16 text-harrypotter-secondary/60 dark:text-harrypotter-secondary/40 transform -rotate-45" />
            
            {/* Magical sparkles */}
            <motion.div
              className="absolute top-0 right-0"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SparklesIcon className="w-6 h-6 text-yellow-400/80 dark:text-yellow-300/70 animate-wand-sparkle" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Floating Hogwarts houses */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={hogwartsHouses}
            alt="Hogwarts Houses"
            className="w-72 h-auto dark:opacity-30"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Floating candles */}
        <motion.div
          className="absolute top-20 left-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
            <CandleIcon className="w-8 h-8 text-yellow-400/70 dark:text-yellow-300/60" />
          </motion.div>
        </motion.div>
        
        {/* Spell book */}
        <motion.div
          className="absolute bottom-10 left-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <BookIcon className="w-16 h-16 text-harrypotter/30 dark:text-harrypotter/20 animate-familiar-shift" />
        </motion.div>
        
        {/* Floating broom */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
            <BroomIcon className="w-20 h-20 text-amber-800/30 dark:text-amber-700/20 animate-broom-wobble" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HarryPotterTheme;