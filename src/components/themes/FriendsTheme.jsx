import { motion } from 'framer-motion';
import { centralPerkLogo, friendsLogo } from '../../assets/images';
import { getIcon } from '../../utils/iconUtils';

const CoffeeIcon = getIcon('coffee');
const SofaIcon = getIcon('sofa');
const ClapperboardIcon = getIcon('clapperboard');

const FriendsTheme = ({ children, isActive = false }) => {
  if (!isActive) return children;

  return (
    <div className="friends-theme relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-friends-light/30 dark:bg-surface-900/90 z-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-5 right-5 opacity-10 dark:opacity-5">
          <motion.img
            src={friendsLogo}
            alt="Friends Logo"
            className="w-64 h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Floating coffee cups */}
        <motion.div
          className="absolute bottom-10 left-10 text-friends dark:text-friends/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CoffeeIcon className="w-16 h-16" />
          
          {/* Steam animation */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-white/50 dark:bg-white/30 animate-coffee-steam"
              style={{ animationDelay: "0s" }}
            />
            <motion.div
              className="h-2 w-2 rounded-full bg-white/50 dark:bg-white/30 animate-coffee-steam"
              style={{ animationDelay: "0.5s" }}
            />
            <motion.div
              className="h-2 w-2 rounded-full bg-white/50 dark:bg-white/30 animate-coffee-steam"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </motion.div>
        
        {/* Sofa icon */}
        <motion.div
          className="absolute bottom-20 right-20 text-friends-secondary/30 dark:text-friends-secondary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SofaIcon className="w-24 h-24" />
        </motion.div>
        
        {/* Central Perk Logo */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 0.15, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={centralPerkLogo}
            alt="Central Perk"
            className="w-64 h-auto dark:opacity-20"
          />
        </motion.div>
        
        {/* Clapperboard */}
        <motion.div
          className="absolute top-20 left-10 text-friends-dark/20"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.8, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ClapperboardIcon className="w-16 h-16" />
        </motion.div>
      </div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FriendsTheme;