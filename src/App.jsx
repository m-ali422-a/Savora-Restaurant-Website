import About from './components/About'
import BookingProcess from './components/BookingProcess'
import Dishes from './components/Dishes'
import FAQs from './components/FAQs'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Timing from './components/Timing'

const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App