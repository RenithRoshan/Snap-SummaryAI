import Feature from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import CallAction from "./components/CallAction"
import Home from "./components/Home"

function App() {

// Inside your component or App.jsx
console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY);

  return (
    <>
    <Header/>
    <Home/>
    <Feature/>
    <Hero/>
    <About/>
    <CallAction/>
    <Footer/>
    </>
  )
}

export default App
