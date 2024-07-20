'use client';
import { useRouter } from 'next/navigation';
import { SubscriptionPlan, SubscriptionPlans } from '@/plans';
import { PricingPlan } from './Pricing/PricingPlan';
import { PricingPeriodSwitch } from './Pricing/PricingPeriodSwitch';
import {
  PricingProvider,
  usePricingContext,
} from './Pricing/PricingPlansProvider';
import { AnnualDiscountTag } from './Pricing/AnnualDiscountTag';
import { AppUrl } from '@/constants';

interface PricingPlansPeriodSwitchProps {
  className?: string;
}

function PricingPlansPeriodSwitch({
  className,
}: PricingPlansPeriodSwitchProps) {
  const { setIsAnnually } = usePricingContext();

  const handleCheckoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnnually(event.currentTarget.checked);
  };
  return (
    <PricingPeriodSwitch
      className={className}
      onChange={handleCheckoutChange}
    />
  );
}

export function PricingPlans() {
  return (
    <PricingProvider>
      <div className={'mb-8 text-center'}>
        <PricingPlansPeriodSwitch className="align-middle" />
        <AnnualDiscountTag className={'ml-4 align-middle'}>
          25% off all year
        </AnnualDiscountTag>
      </div>

      <div className={'grid md:grid-cols-4 gap-2.5'}>
        {SubscriptionPlans.map((plan, key) => (
          <Plan plan={plan} key={key} />
        ))}
      </div>
    </PricingProvider>
  );
}

interface SubscriptionPlanProps {
  plan: SubscriptionPlan;
}

function Plan({ plan }: SubscriptionPlanProps) {
  const router = useRouter();
  const { isAnnually } = usePricingContext();

  const handleBuyBtnClick = () => {
    router.push(AppUrl.BigcapitapApp);
  };

  return (
    <PricingPlan featured={plan.featured}>
      {plan.featured && <PricingPlan.Featured>Most Value</PricingPlan.Featured>}
      <PricingPlan.Header label={plan.name} description={plan.description} />
      {!isAnnually ? (
        <PricingPlan.Price
          price={plan.monthlyPrice}
          subPrice={plan.monthlyPriceLabel}
        />
      ) : (
        <PricingPlan.Price
          price={plan.annuallyPrice}
          subPrice={plan.annuallyPriceLabel}
        />
      )}
      <PricingPlan.BuyButton
        featured={plan.featured}
        onClick={handleBuyBtnClick}
      >
        Subscribe
      </PricingPlan.BuyButton>
      <PricingPlan.Features>
        {plan.features.map((feature, featureIndex) => (
          <PricingPlan.FeatureLine key={featureIndex}>
            {feature.text}
          </PricingPlan.FeatureLine>
        ))}
      </PricingPlan.Features>
    </PricingPlan>
  );
}
