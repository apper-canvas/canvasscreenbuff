import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getIcon } from '../utils/iconUtils';

const AlertCircleIcon = getIcon('alert-circle');
const HomeIcon = getIcon('home');
const ArrowLeftIcon = getIcon('arrow-left');

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <AlertCircleIcon className="w-20 h-20 text-secondary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
        
        <p className="text-surface-600 dark:text-surface-400 mb-8">
          Oops! It seems like this page doesn't exist or has been moved.
          Maybe you mistyped the URL or the page has been deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <HomeIcon className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn-outline"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;