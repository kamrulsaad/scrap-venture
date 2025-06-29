import React from 'react'
import Hero from './_components/Hero'
import HowItWorks from './_components/HowItWorks'
import WhyUs from './_components/WhyUs'
import ForWhom from './_components/ForWhom'
import BlogSection from './_components/BlogSection'
import Testimonials from './_components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <ForWhom />
      <Testimonials />
      <BlogSection />
    </div>
  )
}

export default Home