import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe.js'
import Skills from './Components/Skills.js'
import Portfolio from './Components/Portfolio.js';
import Companies from './Components/Companies.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.font};
        transition: all 0.5s linear;
    }
`;

function App() {
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 7 && currentHour < 18;
  const theme = isDaytime ? lightTheme : darkTheme;

  return (
   
        <div className='p-[20px]'>
 <ThemeProvider theme={theme}>
            <GlobalStyles /> 
     
     { /* Nav Bar */}
    <NavBar/>
 
     { /* Intro */}
 <Home/>
     { /* About me */}
 <AboutMe/>
     { /* Skills */}
 <Skills/>
     { /* Portfolio */}
 <Portfolio/>
     { /* Companies */}
 <Companies/>
     { /* Contact us */}
 <Contact/>
     { /* Footer */}
 <Footer/>
 </ThemeProvider>
     </div>

  );
}

export default App;
