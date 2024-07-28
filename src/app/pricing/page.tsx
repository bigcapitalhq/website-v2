import { PricingPlans } from '@/components/Plans';
import { PricingFaqs } from '@/components/Pricing/PricingFaqs';

export const metadata = {
  title: 'Pricing | Bigcapital',
  description:
    'Simple plans. Simple prices. Only pay for what you really need. All plans come with 24/7 customer support.',
};

export default async function PricingPage() {
  return (
    <div>
      <div className={'container py-16'}>
        <div className={'mb-8 text-center'}>
          <h1
            className={
              'text-3xl md:text-4xl font-extrabold tracking-tight text-darkblue-700'
            }
          >
            Make accounting more seamless
          </h1>

          <p className="mt-2">
            Simple plans. Simple prices. Only pay for what you really need. All
            plans come with 24/7 customer support.
          </p>
        </div>

        <div>
          <PricingPlans />

          <p className={'mt-7 text-sm text-[#404854] text-center'}>
            * All annual plans come with a 30-day money-back guarantee, no
            questions asked.
          </p>
        </div>
      </div>

      <PricingFaqs />
    </div>
  );
}
