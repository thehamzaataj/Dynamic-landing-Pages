  import { useState, useEffect } from 'react';
  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import { HomePage } from './routes/Routes';
  import { AdminDashboardPage, DashboardFeature,DashboardCustomize, DashboardSettingPage } from './routes/AdminRoutes';
  // import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

  function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load dark mode preference from localStorage on initial load
    useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode) {
        setIsDarkMode(storedDarkMode === 'true');
      }
    }, []);

    // Toggle dark mode and save the preference to localStorage
    const handleToggleDarkMode = () => {
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('darkMode', newMode);
        return newMode;
      });
    };

    return (
      <>
        {/* <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/dashboard'
              element={
                <AdminDashboardPage
                  isDarkMode={isDarkMode}
                  ontoggleDarkMode={handleToggleDarkMode}
                />
              }
            />
            <Route
              path='/dashboard/feature'
              element={
                <DashboardFeature
                  isDarkMode={isDarkMode}
                  ontoggleDarkMode={handleToggleDarkMode}
                />
              }
            />
            <Route
            path='/dashboard/Customize-page'
            element={<DashboardCustomize
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
              />
            }
            />
            <Route path='/setting'
            element={<DashboardSettingPage
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
            />}
            />
          </Routes>
      </>
    );
  }

  export default App;
