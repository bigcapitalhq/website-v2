import { getPostData } from '@/lib/posts';
import Image from 'next/image';

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
      <div className={'text-center text-[#79818b] text-sm'}>
        <time dateTime={postData.date}>{postData.formattedDate}</time>
      </div>

      <div>
        <h1
          className={
            'font-extrabold font-styling font-display mt-1.5 mb-2.5 text-center text-[2.2rem] md:text-[2.2rem] tracking-tight leading-[120%] text-[#242c51]'
          }
        >
          {postData.title}
        </h1>
        <p className={'text-center text-[1.2rem] text-[#6b7280]'}>
          {postData.subtitle}
        </p>

        <div className="mx-auto mb-6 mt-4 flex flex-row items-center justify-center gap-2">
          <span className="relative block flex-shrink-0 overflow-hidden rounded-full">
            <Image
              alt={postData.author}
              width="28"
              height="28"
              src={postData.avatar}
            />
          </span>
          <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
            {postData.author}
          </span>
        </div>
      </div>

      <div className={'mb-6'}>
        <Image
          src={postData.picture}
          height={700}
          width={1050}
          className={
            'w-full border border-darkblue-50 object-cover rounded lg:rounded-lg'
          }
          alt=""
        />
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
