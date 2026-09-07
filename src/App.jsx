import About from './components/About'
import BookingProcess from './components/BookingProcess'
import CTA from './components/CTA'
import Dishes from './components/Dishes'
import FAQs from './components/FAQs'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LenisScroll from './components/LenisScroll'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Timing from './components/Timing'

const App = () => {
  return (
    <div>
      <LenisScroll/>
      <Navbar/>
      <Hero/>
      <About/>
      <Stats/>
      <Dishes/>
      <Features/>
      <BookingProcess/>
      <Timing/>
      <Testimonials/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App