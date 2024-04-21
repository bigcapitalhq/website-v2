import { getPostData } from '@/lib/posts';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

export default async function Page(params: Params) {
  const data = await getPostData('ssg-ssr');

  return (
    <div>
      <div className={'text-center'}>
        <time datetime="2024-03-26">March 26th, 2024</time>
      </div>

      <div>
        <h1
          className={
            'font-book font-styling font-display mt-4 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient'
          }
        >
          {/* {postData.title} */}
        </h1>
        <p className={'text-center'}>
          Our journey to becoming compliant and what it means for you.
        </p>

        <div className="mx-auto mb-10 mt-6 flex flex-row items-center justify-center gap-2">
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

      <div className={'content mx-auto max-w-2xl'}>
        We had just over 50 paying customers and only 3 people on the team (Bu,
        Zeno, and myself). We were not thinking about compliance, just trying to
        build a product people loved and would pay for. Even though only two
        prospects had asked us about SOC 2, we knew this journey was best
        started sooner rather than later. Resend is the second company where
        I've gone from zero to SOC 2. I remembered the arduous timeline:
      </div>
    </div>
  );
}
