// app/page.tsx або pages/index.tsx
'use client';
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Solutions from '@/app/components/solutions';
import Testimonials from '@/app/components/testimonials-section';
import Features, { features } from '@/app/components/features';
import Footer from '@/app/components/footer';
import Cta from '@/app/components/cta';
import { testimonials } from '@/app/components/testimonial';
import { solutions } from '@/app/components/solution';
import Sidebar from '@/app/components/sidebar';
import HeaderItem from '@/app/components/header-item';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    AOS.refresh(); // або AOS.refreshHard();
  }, []);


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header>
          <HeaderItem />
        </Header>
        <main className="overflow-y-auto space-y-12 px-4 py-8 ">
          <section data-aos="fade-up"
          >
            <Hero />
          </section>
          <section data-aos="fade-right">
            <Features iconClass={''} title={''} description={''} bgColor={''} iconBgColor={''} {...features} />
          </section>
          <section data-aos="fade-left">
            <Solutions solutions={solutions} />
          </section>
          <section data-aos="zoom-in">
            <Testimonials testimonials={testimonials} />
          </section>
          <section data-aos="zoom-out">
            <Cta />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
