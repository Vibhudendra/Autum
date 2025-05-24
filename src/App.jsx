import About from "./components/About";
import Hero from "./components/hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {
    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <ReactLenis root />
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    )
}

export default App