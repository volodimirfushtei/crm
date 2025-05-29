'use client';

import React from 'react';

export interface Solution {
  id: number;
  industry: string;
  description: string;
}

interface SolutionsSectionProps {
  solutions: Solution[];
}

export default function Solutions({ solutions }: SolutionsSectionProps) {
  return (
    <section id="solutions"
             className="py-24 bg-[url('https://readdy.ai/api/search-image?query=elegant%2520business%2520background%2520with%2520flowing%2520curves%2520and%2520soft%2520geometric%2520shapes%252C%2520light%2520cream%2520and%2520sage%2520green%2520colors%252C%2520professional%2520style&width=1920&height=1080&seq=8&orientation=landscape')] bg-cover bg-center">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Solutions for Every Industry</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're in finance, healthcare, retail, or technology, our platform adapts to your
              specific needs.
            </p>
            <div className="space-y-6">
              {solutions.map((solution) => (
                <div key={solution.id} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.industry}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=modern%2520office%2520environment%2520with%2520business%2520professionals%2520analyzing%2520data%2520on%2520large%2520screens%252C%2520collaborative%2520workspace%252C%2520clean%2520and%2520professional%2520setting%252C%2520natural%2520lighting&width=600&height=400&seq=2&orientation=landscape"
              alt="Solutions"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

