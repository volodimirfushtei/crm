import React from 'react';


export interface CtaProps {

}

function Cta({}: CtaProps) {


  return (
    <div
      className="py-24 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary via-[#8FA464] to-primary/90">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of companies using TruScape to drive their success.
            Start your free trial today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors"
            >Start Free Trial</a
            >
            <a
              href="#"
              className="text-white border border-white/30 px-8 py-4 rounded-button font-medium hover:bg-white/10 transition-colors"
            >Contact Sales</a
            >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;