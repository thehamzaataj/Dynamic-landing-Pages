import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD

import { BrowserRouter } from 'react-router-dom'
=======
// import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
>>>>>>> 2bf7478824851728c0f0dcf9fccbd61b54a1c2ad

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
<<<<<<< HEAD

      <App />
  
  </React.StrictMode>
=======
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
      <App />
    {/* </ClerkProvider> */}
  </React.StrictMode>,
>>>>>>> 2bf7478824851728c0f0dcf9fccbd61b54a1c2ad
  </BrowserRouter>
)