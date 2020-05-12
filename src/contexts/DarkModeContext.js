// import React, { useState, useEffect, useContext, createContext } from 'react';

// export const DarkModeContext = createContext();

// const DarkModeProvider = ({ children }) => {
//   const preferDarkQuery = '(prefers-color-scheme: dark)';
//   const [mode, setMode] = useState(
//     () =>
//       window.localStorage.getItem('colorMode') ||
//       (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'),
//   );

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light');
//     mediaQuery.addListener(handleChange);
//     return () => mediaQuery.removeListener(handleChange);
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem('colorMode', mode);
//   }, [mode]);

//   const value = [mode, setMode];
//   return (
//     <DarkModeContext.Provider value={value}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export default DarkModeProvider;

// export const useDarkMode = () => {
//   const state = useContext(DarkModeContext);
//   if (!state)
//     throw new Error('You need to wrap your component with DarkModeProvider.');
//   return state;
// };
