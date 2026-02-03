import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
// import About from '@/components/About'
import Features from '@/components/Features'
import Ambassador from '@/components/Ambassador'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      {/* <About /> */}
      <Features />
      <Ambassador />
      <Footer />
    </main>
  )
}
