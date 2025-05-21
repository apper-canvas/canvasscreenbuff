import { 
  Tv, Users, CheckCircle, XCircle, Timer, 
  ArrowRight, RefreshCw, Trophy, ArrowLeft, 
  Brain, Wand2, Home, Camera, MapPin, Info,
  Coffee, Sofa, Clapperboard, Sparkles, Flame,
  Book, Broom 
} from 'lucide-react';

/**
 * Get icon component by name
 * @param {string} name - Icon name
 * @returns {React.Component} - Icon component
 */
export const getIcon = (name) => {
  const icons = {
    'tv': Tv,
    'users': Users,
    'check-circle': CheckCircle,
    'x-circle': XCircle,
    'timer': Timer,
    'arrow-right': ArrowRight,
    'refresh-cw': RefreshCw,
    'trophy': Trophy,
    'arrow-left': ArrowLeft,
    'brain': Brain,
    'wand': Wand2,
    'home': Home,
    'camera': Camera,
    'map-pin': MapPin,
    'info': Info,
    'coffee': Coffee,
    'sofa': Sofa,
    'clapperboard': Clapperboard,
    'sparkles': Sparkles,
    'flame': Flame,
    'book': Book,
    'broom': Broom
  };

  return icons[name] || null;
};