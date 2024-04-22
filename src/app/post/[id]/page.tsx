import { getPostData } from '@/lib/posts';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

export default async function Page(params: Params) {
  const postData = await getPostData('ssg-ssr');

  return (
    <div>
      <div className={'text-center text-[#4A5563]'}>
        <time datetime="2024-03-26">March 26th, 2024</time>
      </div>

      <div>
        <h1
          className={
            'font-bold font-styling font-display mt-1.5 mb-2.5 text-center text-[2.2rem] md:text-[2.2rem] tracking-tight leading-[120%] text-[#242c51]'
          }
        >
          {postData.title}
        </h1>
        <p className={'text-center text-[1.2rem] text-[#6b7280]'}>
          Our journey to becoming compliant and what it means for you.
        </p>

        <div className="mx-auto mb-6 mt-4 flex flex-row items-center justify-center gap-2">
          <span className="relative block flex-shrink-0 overflow-hidden rounded-full">
            <img
              alt="Jonni Lundy"
              fetchpriority="high"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              src="/_next/image?url=%2Fstatic%2Favatars%2Fjonni-lundy.jpg&amp;w=64&amp;q=75"
            />
          </span>
          <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
            Jonni Lundy
          </span>
        </div>
      </div>

      <div className={'content mx-auto max-w-2xl text-[#374151]'}>
        <p className={'mb-4'}>
          We had just over 50 paying customers and only 3 people on the team
          (Bu, Zeno, and myself). We were not thinking about compliance, just
          trying to build a product people loved and would pay for. Even though
          only two prospects had asked us about SOC 2, we knew this journey was
          best started sooner rather than later. Resend is the second company
          where I've gone from zero to SOC 2. I remembered the arduous timeline:
        </p>

        <p className={'mb-4'}>
          We had just over 50 paying customers and only 3 people on the team
          (Bu, Zeno, and myself). We were not thinking about compliance, just
          trying to build a product people loved and would pay for. Even though
          only two prospects had asked us about SOC 2, we knew this journey was
          best started sooner rather than later. Resend is the second company
          where I've gone from zero to SOC 2. I remembered the arduous timeline:
        </p>

        <p className={'mb-4'}>
          We had just over 50 paying customers and only 3 people on the team
          (Bu, Zeno, and myself). We were not thinking about compliance, just
          trying to build a product people loved and would pay for. Even though
          only two prospects had asked us about SOC 2, we knew this journey was
          best started sooner rather than later. Resend is the second company
          where I've gone from zero to SOC 2. I remembered the arduous timeline:
        </p>

        <p className={'mb-4'}>
          We had just over 50 paying customers and only 3 people on the team
          (Bu, Zeno, and myself). We were not thinking about compliance, just
          trying to build a product people loved and would pay for. Even though
          only two prospects had asked us about SOC 2, we knew this journey was
          best started sooner rather than later. Resend is the second company
          where I've gone from zero to SOC 2. I remembered the arduous timeline:
        </p>

        <p className={'mb-4'}>
          We had just over 50 paying customers and only 3 people on the team
          (Bu, Zeno, and myself). We were not thinking about compliance, just
          trying to build a product people loved and would pay for. Even though
          only two prospects had asked us about SOC 2, we knew this journey was
          best started sooner rather than later. Resend is the second company
          where I've gone from zero to SOC 2. I remembered the arduous timeline:
        </p>
      </div>
    </div>
  );
}
