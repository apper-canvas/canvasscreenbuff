import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { Tilt } from 'react-parallax-tilt';
import { getIcon } from '../utils/iconUtils';
import { FriendsTheme, ModernFamilyTheme, HarryPotterTheme } from './themes';

// Icons
const TvIcon = getIcon('tv');
const UsersIcon = getIcon('users');
const MagicWandIcon = getIcon('wand');
const CheckCircleIcon = getIcon('check-circle');
const XCircleIcon = getIcon('x-circle');
const TimerIcon = getIcon('timer');
const ArrowRightIcon = getIcon('arrow-right');
const RefreshCwIcon = getIcon('refresh-cw');
const TrophyIcon = getIcon('trophy');
const ArrowLeftIcon = getIcon('arrow-left');
const BrainIcon = getIcon('brain');

// Mock quiz data
const quizData = {
  friends: {
    name: "Friends",
    icon: UsersIcon,
    color: "friends",
    questions: [
      {
        id: "f1",
        text: "What is the name of Ross and Monica's dog when they were growing up?",
        options: ["Marcel", "Chi-Chi", "LaPooh", "Rover"],
        correctAnswer: 2,
      },
      {
        id: "f2",
        text: "What is Chandler Bing's job?",
        options: ["Statistical analyst", "IT procurement manager", "Transponster", "Data reconfiguration specialist"],
        correctAnswer: 0,
      },
      {
        id: "f3",
        text: "Which Friend hates Thanksgiving?",
        options: ["Ross", "Chandler", "Rachel", "Monica"],
        correctAnswer: 1,
      },
      {
        id: "f4",
        text: "What is Joey's catchphrase?",
        options: ["How you doin'?", "Could I BE any more...?", "Oh my God!", "We were on a break!"],
        correctAnswer: 0,
      },
      {
        id: "f5",
        text: "What is the name of Phoebe's alter ego?",
        options: ["Princess Consuela Banana-Hammock", "Regina Phalange", "Elaine Benes", "Althea"],
        correctAnswer: 1,
      },
      {
        id: "f6",
        text: "What is the name of Ross's second wife?",
        options: ["Carol", "Emily", "Rachel", "Janice"],
        correctAnswer: 1,
      },
      {
        id: "f7",
        text: "Which character worked at Bloomingdale's?",
        options: ["Monica", "Rachel", "Phoebe", "Chandler"],
        correctAnswer: 1,
      },
      {
        id: "f8",
        text: "What was the name of Joey's agent?",
        options: ["Estelle", "Stella", "Ellen", "Elaine"],
        correctAnswer: 0,
      },
      {
        id: "f9",
        text: "What food causes Ross to break a tooth on Thanksgiving?",
        options: ["Cranberry sauce", "Sweet potato", "Tricle tart", "Potatoes"],
        correctAnswer: 2,
      },
      {
        id: "f10",
        text: "What was the profession of Rachel's fiancé, Barry?",
        options: ["Doctor", "Lawyer", "Orthodontist", "Accountant"],
        correctAnswer: 2,
      },
      {
        id: "f11",
        text: "What instrument does Phoebe play?",
        options: ["Drum", "Guitar", "Keyboard", "Tambourine"],
        correctAnswer: 1,
      },
      {
        id: "f12",
        text: "Monica and Chandler first got together at whose wedding?",
        options: ["Barry and Mindy's", "Ross and Emily's", "Carol and Susan's", "Phoebe and Mike's"],
        correctAnswer: 1,
      },
    ],
  },
  modernfamily: {
    name: "Modern Family",
    icon: TvIcon,
    color: "modernfamily",
    questions: [
      {
        id: "mf1",
        text: "What is Phil Dunphy's real estate slogan?",
        options: ["Buy from Phil", "Phil it up", "Phil yourself at home", "Phil's-osophy"],
        correctAnswer: 2,
      },
      {
        id: "mf2",
        text: "What is the name of Jay and Gloria's son?",
        options: ["Joe", "Manny", "Fulgencio", "Javier"],
        correctAnswer: 0,
      },
      {
        id: "mf3",
        text: "What is Claire's maiden name?",
        options: ["Pritchett", "Tucker", "Delgado", "Johnson"],
        correctAnswer: 0,
      },
      {
        id: "mf4",
        text: "What is Mitchell's profession?",
        options: ["Doctor", "Teacher", "Lawyer", "Real Estate Agent"],
        correctAnswer: 2,
      },
      {
        id: "mf5",
        text: "What does Jay Pritchett's company make?",
        options: ["Furniture", "Closets", "Windows", "Kitchen appliances"],
        correctAnswer: 1,
      },
      {
        id: "mf6",
        text: "What is the name of Cam and Mitchell's daughter?",
        options: ["Lily", "Lucy", "Linda", "Leah"],
        correctAnswer: 0,
      },
      {
        id: "mf7",
        text: "What is Gloria's native country?",
        options: ["Mexico", "Brazil", "Colombia", "Spain"],
        correctAnswer: 2,
      },
      {
        id: "mf8",
        text: "What college did Haley get accepted to before being expelled?",
        options: ["UCLA", "USC", "Stanford", "NYU"],
        correctAnswer: 1,
      },
      {
        id: "mf9",
        text: "What is Manny's father's name?",
        options: ["Jay", "Javier", "Juan", "Jose"],
        correctAnswer: 1,
      },
      {
        id: "mf10",
        text: "What is Cameron's clown name?",
        options: ["Fizbo", "Bozo", "Bubbles", "Chuckles"],
        correctAnswer: 0,
      },
      {
        id: "mf11",
        text: "What is Luke's full name?",
        options: ["Lucas Dunphy", "Lukas Dunphy", "Luciano Dunphy", "Luis Dunphy"],
        correctAnswer: 0,
      },
      {
        id: "mf12",
        text: "What was Phil's invention called?",
        options: ["iButler", "iCoach", "iDecide", "iBreakUp"],
        correctAnswer: 2,
      },
    ],
  },
  harrypotter: {
    name: "Harry Potter",
    icon: MagicWandIcon,
    color: "harrypotter",
    questions: [
      {
        id: "hp1",
        text: "What is Harry Potter's Patronus?",
        options: ["Stag", "Doe", "Horse", "Wolf"],
        correctAnswer: 0,
      },
      {
        id: "hp2",
        text: "What house at Hogwarts does Harry Potter belong to?",
        options: ["Hufflepuff", "Ravenclaw", "Slytherin", "Gryffindor"],
        correctAnswer: 3,
      },
      {
        id: "hp3",
        text: "Who was the Half-Blood Prince?",
        options: ["Voldemort", "Severus Snape", "Harry Potter", "Albus Dumbledore"],
        correctAnswer: 1,
      },
      {
        id: "hp4",
        text: "What is Hermione Granger's cat's name?",
        options: ["Scabbers", "Hedwig", "Crookshanks", "Fang"],
        correctAnswer: 2,
      },
      {
        id: "hp5",
        text: "What position does Harry play in Quidditch?",
        options: ["Keeper", "Chaser", "Beater", "Seeker"],
        correctAnswer: 3,
      },
      {
        id: "hp6",
        text: "What is the core of Harry's wand?",
        options: ["Phoenix feather", "Dragon heartstring", "Unicorn hair", "Veela hair"],
        correctAnswer: 0,
      },
      {
        id: "hp7",
        text: "Which of these is NOT a Hogwarts house?",
        options: ["Hufflepuff", "Ravenclaw", "Slytherin", "Merlinpuff"],
        correctAnswer: 3,
      },
      {
        id: "hp8",
        text: "Who killed Dobby?",
        options: ["Bellatrix Lestrange", "Voldemort", "Lucius Malfoy", "Peter Pettigrew"],
        correctAnswer: 0,
      },
      {
        id: "hp9",
        text: "What animal can Ron's Patronus take the form of?",
        options: ["Dog", "Horse", "Jack Russell Terrier", "Otter"],
        correctAnswer: 2,
      },
      {
        id: "hp10",
        text: "What does the Imperius Curse do?",
        options: ["Causes pain", "Controls the victim", "Kills instantly", "Creates hallucinations"],
        correctAnswer: 1,
      },
      {
        id: "hp11",
        text: "Which of the following is NOT a Deathly Hallow?",
        options: ["The Elder Wand", "The Resurrection Stone", "The Invisibility Cloak", "The Time-Turner"],
        correctAnswer: 3,
      },
      {
        id: "hp12",
        text: "What is the name of Harry Potter's owl?",
        options: ["Fawkes", "Hedwig", "Errol", "Pigwidgeon"],
        correctAnswer: 1,
      },
    ],
  },
};

// Sound effects
const useSoundEffect = (correct) => {
  // In a real app, we would use the Howler.js library for sound effects
  useEffect(() => {
    if (correct === true) {
      // Play correct sound
      console.log("Playing correct sound effect");
    } else if (correct === false) {
      // Play incorrect sound
      console.log("Playing incorrect sound effect");
    }
  }, [correct]);
};

const MainFeature = () => {
  // Game state
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timerActive, setTimerActive] = useState(false);
  
  // Sound effect hook
  useSoundEffect(isCorrect);
  
  // Shuffle and get 10 questions from the category
  const startQuiz = (category) => {
    const categoryData = quizData[category];
    if (!categoryData) {
      toast.error("Category not found!");
      return;
    }
    
    // Shuffle questions and pick 10
    const shuffledQuestions = [...categoryData.questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    
    setSelectedCategory(category);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameState('playing');
    setTimeLeft(15);
    setTimerActive(true);
  };
  
  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    setTimerActive(false);
    
    const currentQuestion = questions[currentQuestionIndex];
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // After 1.5 seconds, move to the next question or show results
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setTimeLeft(15);
        setTimerActive(true);
      } else {
        setGameState('result');
      }
    }, 1500);
  };
  
  // Timer effect
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timerActive && timeLeft === 0) {
      // Time's up, mark as incorrect and move to next question
      setTimerActive(false);
      setSelectedAnswer(-1); // -1 indicates timeout
      setIsCorrect(false);
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setTimeLeft(15);
          setTimerActive(true);
        } else {
          setGameState('result');
        }
      }, 1500);
    }
    
    return () => clearTimeout(timer);
  }, [timerActive, timeLeft, currentQuestionIndex, questions.length]);
  
  // Restart the quiz
  const restartQuiz = () => {
    setGameState('start');
    setSelectedCategory(null);
  };
  
  // Replay the same category
  const replayQuiz = () => {
    startQuiz(selectedCategory);
  };
  
  // Render different screens based on game state
  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return renderCategorySelection();
      case 'playing':
        return renderQuizQuestion();
      case 'result':
        return renderResults();
      default:
        return renderCategorySelection();
    }
  };
  
  // Render category selection screen
  const renderCategorySelection = () => {
    return (
      <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Category</h2>
        <p className="text-surface-600 dark:text-surface-400 max-w-xl mx-auto">
          Select your favorite show or movie to start the trivia challenge!
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-8 md:grid-cols-3"
      >
        {Object.entries(quizData).map(([key, category]) => {
          const CategoryIcon = category.icon;
          
          // Category-specific components
          let CategoryComponent;
          let buttonClass = "neu-card flex flex-col items-center p-6 transition-all";
          let iconClass = `w-12 h-12 mb-4 text-${category.color}`;
          let backgroundClass = "";
          let tiltOptions = { max: 10, scale: 1.05, speed: 500 };
          
          switch(key) {
            case 'friends':
              backgroundClass = "before:absolute before:inset-0 before:bg-friends-pattern before:bg-cover before:bg-center before:opacity-10 before:dark:opacity-5 overflow-hidden";
              
              // Additional Friends-specific styling
              buttonClass += " border-friends hover:border-friends-dark hover:bg-friends-light/50";
              iconClass += " animate-bounce-short";
              
              // Content for Friends
              CategoryComponent = (
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }} 
                    transition={{ duration: 0.5 }}
                  >
                    <CategoryIcon className={iconClass} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 font-friends">{category.name}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Coffee shop trivia!
                  </p>
                </div>
              );
              break;
              
            case 'modernfamily':
              backgroundClass = "before:absolute before:inset-0 before:bg-modernfamily-pattern before:bg-cover before:bg-center before:opacity-10 before:dark:opacity-5 overflow-hidden";
              buttonClass += " border-modernfamily hover:border-modernfamily-dark hover:bg-modernfamily-light/50";
              
              // Content for Modern Family
              CategoryComponent = (
                <div className="relative z-10">
                  <CategoryIcon className={`${iconClass} animate-family-bounce`} />
                  <h3 className="text-xl font-bold mb-2 font-modernfamily">{category.name}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Family comedy trivia!
                  </p>
                </div>
              );
              break;
              
            case 'harrypotter':
              backgroundClass = "before:absolute before:inset-0 before:bg-harrypotter-pattern before:bg-cover before:bg-center before:opacity-10 before:dark:opacity-5 overflow-hidden";
              buttonClass += " border-harrypotter hover:border-harrypotter-gryffindor hover:bg-harrypotter-secondary/20";
              tiltOptions = { max: 15, scale: 1.05, speed: 1000, glare: true, "max-glare": 0.3 };
              
              // Content for Harry Potter with floating animation
              CategoryComponent = (
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <CategoryIcon className={`${iconClass} magical-glow`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 font-wizarding">{category.name}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Wizarding world trivia!
                  </p>
                </div>
              );
              break;
              
            default:
              CategoryComponent = (
                <>
                  <CategoryIcon className={iconClass} />
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    {category.questions.length} trivia questions
                  </p>
                </>
              );
          }
          
          return (
            <Tilt key={key} {...tiltOptions}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startQuiz(key)}
                className={`relative ${buttonClass} ${backgroundClass}`}
              >
                {CategoryComponent}
              </motion.button>
            </Tilt>
          );
        })}
      </motion.div>
      </>
    );
  };
  
  // Render quiz question screen
  const renderQuizQuestion = () => {
    if (!questions.length) return null;
    
    const currentQuestion = questions[currentQuestionIndex];
    const categoryData = quizData[selectedCategory];
    
    // Determine which theme wrapper to use based on the selected category
    let ThemeWrapper;
    let buttonClass = "btn-primary";
    
    switch(selectedCategory) {
      case 'friends':
        ThemeWrapper = FriendsTheme;
        buttonClass = "friends-btn";
        break;
      case 'modernfamily':
        ThemeWrapper = ModernFamilyTheme;
        buttonClass = "modernfamily-btn";
        break;
      case 'harrypotter':
        ThemeWrapper = HarryPotterTheme;
        buttonClass = "harrypotter-btn";
        break;
      default:
        ThemeWrapper = ({ children }) => <>{children}</>;
    }
    
    return (
      <ThemeWrapper isActive={true}>
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        {/* Quiz header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {categoryData.icon && <categoryData.icon className={`w-6 h-6 mr-2 text-${categoryData.color}`} />}
            <h3 className={`font-bold text-${categoryData.color} ${
              selectedCategory === 'friends' ? 'font-friends' : 
              selectedCategory === 'modernfamily' ? 'font-modernfamily' : 
              selectedCategory === 'harrypotter' ? 'font-wizarding' : ''
            }`}>
              {categoryData.name}</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <TrophyIcon className="w-5 h-5 mr-1 text-accent" />
              <span className="font-bold">{score}</span>
              <span className="text-surface-500 dark:text-surface-400 ml-1">/ {currentQuestionIndex}</span>
            </div>
            
            <div className="flex items-center">
              <TimerIcon className={`w-5 h-5 mr-1 ${timeLeft <= 5 ? 'text-secondary animate-pulse' : 'text-surface-500'}`} />
              <span className={`font-mono ${timeLeft <= 5 ? 'text-secondary font-bold' : ''}`}>{timeLeft}s</span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-surface-200 dark:bg-surface-800 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full bg-${categoryData.color}`}
          />
        <div className={`card mb-6 ${
          selectedCategory === 'friends' ? 'border-2 border-friends' : 
          selectedCategory === 'modernfamily' ? 'border-2 border-modernfamily' : 
          selectedCategory === 'harrypotter' ? 'border-2 border-harrypotter bg-harrypotter/5' : ''
        }`}>
          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
            selectedCategory === 'friends' ? 'font-friends' : 
            selectedCategory === 'modernfamily' ? 'font-modernfamily' : 
            selectedCategory === 'harrypotter' ? 'font-wizarding' : ''
          }`}>
        {/* Question */}
        <div className="card mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
        </div>
          </h3>
          <p className="text-lg md:text-xl">{currentQuestion.text}</p>
        </div>
        
        {/* Answer options */}
        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => {
            // Determine styling based on selection state
            let optionClass = "p-4 border-2 rounded-xl flex items-center transition-all";
            
            if (selectedAnswer === null) {
              // Not answered yet
              optionClass += ` border-surface-300 dark:border-surface-700 ${
                selectedCategory === 'friends' 
                  ? 'hover:border-friends hover:bg-friends-light/20' 
                : selectedCategory === 'modernfamily' 
                  ? 'hover:border-modernfamily hover:bg-modernfamily-light/20' 
                : selectedCategory === 'harrypotter' 
                  ? 'hover:border-harrypotter hover:bg-harrypotter-secondary/20' : 'hover:border-primary hover:bg-primary-light/10'}`;
            } else if (index === currentQuestion.correctAnswer) {
              // Correct answer
              optionClass += " border-green-500 bg-green-100 dark:bg-green-900/30";
            } else if (selectedAnswer === index) {
              // Selected but incorrect
              optionClass += " border-red-500 bg-red-100 dark:bg-red-900/30";
            } else {
              // Other options after selection
              optionClass += " border-surface-300 dark:border-surface-700 opacity-50";
            }
            
            return (
              <motion.button
                key={index}
                whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                onClick={() => selectedAnswer === null && handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={optionClass}
              >
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 font-bold ${
                selectedCategory === 'friends' ? 'border-friends' : 
                selectedCategory === 'modernfamily' ? 'border-modernfamily' : 
                selectedCategory === 'harrypotter' ? 'border-harrypotter' : 
                'border-current'
              }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1 text-left">{option}</span>
                
                {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 ml-2" />
                )}
                
                {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                  <XCircleIcon className="w-6 h-6 text-red-500 ml-2" />
                )}
              </motion.button>
            );
          })}
        </div>
        
        {/* Category-specific decorative elements */}
        {selectedCategory === 'harrypotter' && (
          <motion.div 
            className="absolute bottom-10 right-10 opacity-30 dark:opacity-20 z-0 text-harrypotter"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <WandIcon className="w-16 h-16" />
          </motion.div>
        )}
        
        {/* Feedback animation */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                flex items-center justify-center rounded-full w-24 h-24 z-20
                ${isCorrect ? 'bg-green-500' : 'bg-red-500'} ${selectedCategory === 'harrypotter' ? 'magical-glow' : ''}`}
            >
              {isCorrect ? (
                <CheckCircleIcon className="w-16 h-16 text-white" />
              ) : (
                <XCircleIcon className="w-16 h-16 text-white" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
      </ThemeWrapper>
    );
  };
  
  // Render results screen
  const renderResults = () => {
    const categoryData = quizData[selectedCategory];
    const percentage = (score / questions.length) * 100;
    let message;
    
    // Define theme wrapper based on category
    let ThemeWrapper;
    switch(selectedCategory) {
      case 'friends': ThemeWrapper = FriendsTheme; break;
      case 'modernfamily': ThemeWrapper = ModernFamilyTheme; break;
      case 'harrypotter': ThemeWrapper = HarryPotterTheme; break;
      default: ThemeWrapper = ({ children }) => <>{children}</>;
    }
    
    
    if (percentage >= 90) {
      message = "Amazing! You're a true fan!";
    } else if (percentage >= 70) {
      message = "Great job! You know your stuff!";
    } else if (percentage >= 50) {
      message = "Not bad! You've got the basics down.";
    } else {
      message = "Keep watching and try again!";
    }
    
    return (
      <ThemeWrapper isActive={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className={`card mb-6 ${
            selectedCategory === 'friends' ? 'border-2 border-friends' : 
            selectedCategory === 'modernfamily' ? 'border-2 border-modernfamily' : 
            selectedCategory === 'harrypotter' ? 'border-2 border-harrypotter bg-harrypotter/5' : ''
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
              selectedCategory === 'friends' ? 'font-friends' : 
              selectedCategory === 'modernfamily' ? 'font-modernfamily' : 
              selectedCategory === 'harrypotter' ? 'font-wizarding' : ''
            }`}>
              Quiz Completed!
            </h2>
            
            <div className={`inline-flex items-center justify-center p-4 my-6 rounded-full bg-${categoryData.color}/20 ${
              selectedCategory === 'harrypotter' ? 'magical-glow' : ''
            }`}>
              {categoryData.icon && <categoryData.icon className={`w-10 h-10 text-${categoryData.color} ${
                selectedCategory === 'harrypotter' ? 'animate-float' : 
                selectedCategory === 'friends' ? 'animate-bounce-short' : 
                selectedCategory === 'modernfamily' ? 'animate-family-bounce' : ''
              }`} />}
            </div>
            
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              selectedCategory === 'friends' ? 'font-friends text-friends-dark' : 
              selectedCategory === 'modernfamily' ? 'font-modernfamily text-modernfamily-dark' : 
              selectedCategory === 'harrypotter' ? 'font-wizarding text-harrypotter' : ''
            }`}>
              {score} / {questions.length}
            </div>
            <p className="text-lg md:text-xl mb-4">{message}</p>
          
            {/* Score gauge */}
            <div className="w-full h-4 bg-surface-200 dark:bg-surface-800 rounded-full mb-2 overflow-hidden">
              <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`h-full ${
                percentage >= 70 ? 'bg-green-500' : 
                percentage >= 50 ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}
            />
          </div>
          <p className="text-lg font-bold mb-6">{percentage.toFixed(0)}%</p>
          
              />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="inline-block p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full mb-4"
            >
              <TrophyIcon className="w-8 h-8" />
            </motion.div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={replayQuiz}
            className={`${
              selectedCategory === 'friends' ? 'friends-btn' : 
              selectedCategory === 'modernfamily' ? 'modernfamily-btn' : 
              selectedCategory === 'harrypotter' ? 'harrypotter-btn' : 'btn-primary'}`}
          >
            <RefreshCwIcon className="w-5 h-5 mr-2" />
            Play Again
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restartQuiz}
            className="btn-outline"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Change Category
          </motion.button>
        </div>
        </motion.div>
      </ThemeWrapper>
    );
  };
  
  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainFeature;