import { getPostData, getSortedPostsData } from '@/lib/posts';

export default function Page() {
  return (
    <div>
      <Posts />
    </div>
  );
}

function Posts() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className={'mb-10 text-3xl font-semibold'}>Blog</h1>
      <div className={'columns-2 gap-6'}>
        {posts.map((post, index) => (
          <Post key={index} title={post.title} id={post.id} />
        ))}
      </div>
    </div>
  );
}

interface PostProps {
  id: string;
  title: string;
}

export function Post({ title, id }: PostProps) {
  return (
    <div className={''}>
      <a className="block" href={`/post/${id}`}>
        <div className={''}>
          <img
            src={
              'https://resend.com/_next/image?url=%2Fstatic%2Fposts%2Fsoc-2.jpg&w=828&q=75'
            }
            className={
              'col-span-2 w-full border border-slate-6 object-cover rounded lg:rounded-md m-[1px]'
            }
          />
        </div>

        <div>
          <div className={'mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3'}>
            <div className="flex gap-1 place-items-center">
              <div>
                <img
                  className="rounded-full"
                  height={'26'}
                  width="26"
                  src="https://avatars.githubusercontent.com/u/2197422?v=4"
                />
              </div>
              <p className="text-sm font-normal text-darkblue-800">
                Ahmed Bouhulia ·{' '}
              </p>
              <p className="text-sm font-normal text-[#6b7280]">
                <time datetime="2024-04-11">Apr 11, 2024</time>
              </p>
            </div>
          </div>

          <h1 className="font-bold font-styling font-display mt-3 line-clamp-5 text-balance text-[28px] leading-tight text-xl leading-[130%] text-darkblue-900 hover:text-indigo tracking-tight">
            {title}
          </h1>

          <div className={'mt-[4px] text-[#6b7280] text-[15px]'}>
            Control your business bookkeeping with automated accounting, to run
            intelligent reports for faster decision-making.
          </div>
        </div>
      </a>
    </div>
  );
}
