import { motion } from 'framer-motion';
import { modernFamilyLogo } from '../../assets/images';
import { getIcon } from '../../utils/iconUtils';

const HomeIcon = getIcon('home');
const CameraIcon = getIcon('camera');
const UsersIcon = getIcon('users');
const MapPinIcon = getIcon('map-pin');

const ModernFamilyTheme = ({ children, isActive = false }) => {
  if (!isActive) return children;

  return (
    <div className="modernfamily-theme relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-modernfamily-light/30 dark:bg-surface-900/90 z-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10 dark:opacity-5">
          <motion.img
            src={modernFamilyLogo}
            alt="Modern Family Logo"
            className="w-64 h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Family home */}
        <motion.div
          className="absolute bottom-10 left-10 text-modernfamily dark:text-modernfamily/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HomeIcon className="w-20 h-20" />
        </motion.div>
        
        {/* Family group */}
        <motion.div
          className="absolute bottom-20 right-20 text-modernfamily-secondary/30 dark:text-modernfamily-secondary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <UsersIcon className="w-24 h-24 animate-family-bounce" />
        </motion.div>
        
        {/* Camera flash effect */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <div className="relative">
            <CameraIcon className="w-24 h-24 text-modernfamily-dark/20 dark:text-modernfamily/20" />
            <div className="absolute inset-0 bg-white rounded-full animate-camera-flash opacity-0"></div>
          </div>
        </motion.div>
        
        {/* Location pins for different homes */}
        <motion.div
          className="absolute top-20 left-10 text-modernfamily-secondary/40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MapPinIcon className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 left-20 text-modernfamily/40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <MapPinIcon className="w-10 h-10" />
        </motion.div>
        
        <motion.div
          className="absolute top-60 left-15 text-modernfamily-dark/40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <MapPinIcon className="w-8 h-8" />
        </motion.div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ModernFamilyTheme;