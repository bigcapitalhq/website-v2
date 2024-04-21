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
    <div className={'grid grid-rows-3 grid-flow-col gap-4'}>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} id={post.id} />
      ))}
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
      <a href={`/post/${id}`}>
        <div className={''}>
          <img
            src={
              'https://resend.com/_next/image?url=%2Fstatic%2Fposts%2Fsoc-2.jpg&w=828&q=75'
            }
            className={
              'col-span-2 w-full border border-slate-6 object-cover rounded lg:rounded-md'
            }
          />
        </div>

        <div>
          <h1 className="font-book font-styling font-display mt-4 line-clamp-5 text-balance text-[28px] leading-tight text-xl leading-[130%] text-slate-12">
            {title}
          </h1>
          <div className={'mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3'}>
            <div className="flex gap-1">
              <p className="text-sm font-normal text-slate-12">
                Ahmed Bouhulia ·{' '}
              </p>
              <p className="text-sm font-normal opacity-8">
                <time datetime="2024-04-11">Apr 11, 2024</time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}