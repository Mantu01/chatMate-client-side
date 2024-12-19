import React, { useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import Logout from './Logout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice.js';

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); 
  const auth = useSelector((state) => state.auth);
  const currentUser = auth?.userData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="h-16 py-3 flex justify-between items-center px-4 shadow-sm shadow-black dark:shadow-white mb-1">
      <NavLink to={`${currentUser?`/user/${currentUser.userName}`:"/"}`} className="logo flex justify-center items-center h-full cursor-pointer">
      {currentUser && currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            className="h-10 w-10 rounded-full object-cover"
            alt={`${currentUser.fullName}'s avatar`}
          />
        ) : (
          <>
          <img src="/logo.png" className="h-full" alt="ChatMate Logo" />
          <h1 className="text-2xl font-bold">ChatMate</h1>
          </>
        )}
      </NavLink>
      <div className="hidden md:flex space-x-6 pr-6 font-semibold text-lg">
        <NavLink to="/" className={({isActive})=>`hover:text-[#8e52ff] ${isActive?"text-orange-400":""}`}>Home</NavLink>
        <NavLink to="/friends" className={({isActive})=>`hover:text-[#8e52ff] ${isActive?"text-orange-400":""}`}>Friend</NavLink>
        <NavLink to="/dashboard" className={({isActive})=>`hover:text-[#8e52ff] ${isActive?"text-orange-400":""}`}>Dashboard</NavLink>
        <NavLink to="/about" className={({isActive})=>`hover:text-[#8e52ff] ${isActive?"text-orange-400":""}`}>About</NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex">
          <Logout />
        </div>
        <button
          onClick={handleToggleTheme} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon />}
        </button>
      </div>

      <button
        className="md:hidden hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="w-[90%] mobile-menu fixed inset-0 bg-[#4f4848] px-6 py-4 z-10">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>

            <NavLink to="/" className={({isActive})=>`block py-2 hover:text-blue-400 font-semibold text-lgNav ${isActive?"text-orange-400":""}`}>Home</NavLink>
            <NavLink to="/friends" className="block py-2 hover:text-blue-400 font-semibold text-lg">Friend</NavLink>
            <NavLink to="/dashboard" className="block py-2 hover:text-blue-400 font-semibold text-lg">Dashboard</NavLink>
        <NavLink to="/about" className={({isActive})=>`hover:text-[#8e52ff] ${isActive?"text-orange-400":""}`}>About</NavLink>
            <Logout />
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
