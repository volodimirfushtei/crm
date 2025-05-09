'use client';

import React from 'react';
import Image from 'next/image';

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 bg-gray-100 drop-shadow-xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with TruScape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;