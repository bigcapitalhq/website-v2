import React from 'react';

export function CTASection() {
  return (
    <div className="px-[15px] py-[100px]">
      <div className={'container mx-auto'}>
        <h1 className="max-w-800 font-extrabold mx-auto text-center text-[40px] leading-[48px] max-w-[70%] text-darkblue-800">
          Let's see what Bigcapital software can do for your business.
        </h1>

        <div className="text-center mt-6">
          <a
            className="inline-block h-[44px] text-lg leading-[44px] rounded-full px-10 bg-indigo text-white"
            href="#"
          >
            Start Accounting
          </a>
        </div>
      </div>
    </div>
  );
}
