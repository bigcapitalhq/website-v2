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
            Make teamwork more productive
          </h1>

          <p className="mt-2">
            Simple plans. Simple prices. Only pay for what you really need. All
            plans come with 24/7 customer support.
          </p>
        </div>

        <div>
          <PricingPlans />
        </div>
      </div>

      <PricingFaqs />
    </div>
  );
}
