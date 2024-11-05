  import { useState, useEffect } from 'react';
  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import { HomePage } from './routes/Routes';
  import { AdminDashboardPage, DashboardFeature,DashboardHero, DashboardSettingPage ,DashboardSettingAU ,AdminSettingFeaturePage, AdminSettingPricingPage} from './routes/AdminRoutes';
  // import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

  function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode) {
        setIsDarkMode(storedDarkMode === 'true');
      }
    }, []);

    const handleToggleDarkMode = () => {
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('darkMode', newMode);
        return newMode;
      });
    };

    return (
      <>
        { /* <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */ }
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
            <Route path='/setting'
            element={<DashboardSettingPage
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
            />}
            />
             <Route
            path='/dashboard/Customize-page'
            element={<DashboardHero
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
              />
            }
            />
            <Route 
            path='/setting/about-us'
            element={<DashboardSettingAU
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
              />}
            />
            <Route 
            path='/setting/testimonial'
            element={<AdminSettingFeaturePage
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
              />}
            />
            <Route 
            path='/setting/pricing'
            element={<AdminSettingPricingPage
              isDarkMode={isDarkMode}
              ontoggleDarkMode={handleToggleDarkMode}
              />}
            />
          </Routes>
      </>
    );
  }

  export default App;
