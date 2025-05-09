import React from 'react';

export interface Feature {
  iconClass: string;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
}

export const features: Feature[] = [
  {
    iconClass: 'ri-line-chart-line',
    title: 'Advanced Analytics',
    description:
      'Get deep insights into your business performance with our powerful analytics tools and customizable dashboards.',
    bgColor: 'bg-[#EFFBDB]',
    iconBgColor: 'bg-[#8FA464]/20',
  },
  {
    iconClass: 'ri-bar-chart-2-line',
    title: 'Real-Time Monitoring',
    description:
      'Monitor your key metrics in real-time to make informed decisions quickly and efficiently.',
    bgColor: 'bg-[#DBF3FB]',
    iconBgColor: 'bg-[#64A4A4]/20',
  },
  {
    iconClass: 'ri-pie-chart-line',
    title: 'Customizable Reports',
    description:
      'Generate reports tailored to your business needs, helping you to visualize data effectively.',
    bgColor: 'bg-[#FBEFDB]',
    iconBgColor: 'bg-[#A4648F]/20',
  },
];

function Features({}: Feature) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to analyze, optimize, and grow your business in one powerful platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  s">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${feature.bgColor} hover:opacity-90 transition-opacity shadow-md `}
            >
              <div
                className={`w-14 h-14 ${feature.iconBgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                <i className={`${feature.iconClass} text-primary text-2xl shadow-md`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
