import { getPostData } from '@/lib/posts';
import Image from 'next/image';
import './page.css';

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
      <div
        className={
          'text-center text-[#79818b] text-sm animate__animated animate__fadeIn'
        }
      >
        <time dateTime={postData.date}>{postData.formattedDate}</time>
      </div>

      <div>
        <h1
          className={
            'font-extrabold font-styling font-display mt-1.5 mb-2.5 text-center text-[2rem] md:text-[2.2rem] tracking-tight leading-[120%] text-[#242c51] animate__animated animate__fadeIn'
          }
        >
          {postData.title}
        </h1>
        <p
          className={
            'animate__animated animate__fadeIn text-center text-[1.2rem] text-[#6b7280]'
          }
        >
          {postData.subtitle}
        </p>

        <div className="animate__animated animate__fadeIn mx-auto mb-6 mt-4 flex flex-row items-center justify-center gap-2">
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

      <div className={'animate__animated animate__fadeIn mb-6'}>
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

      <div
        className={
          'content mx-auto max-w-2xl text-[#374151] animate__animated animate__fadeIn'
        }
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></div>
    </div>
  );
}
