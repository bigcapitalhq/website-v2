import clsx from 'classnames';
import { getSortedUpdatesData } from '@/lib/updates';
import './page.css';

export default async function UpdatesPage() {
  const updates = await getSortedUpdatesData();

  return (
    <div>
      {updates.map((update, index) => (
        <article
          key={index}
          className="flex items-start md:flex-row flex-col gap-6 mb-16 pb-10 overflow-wrap border-b-[1px] border-[#E5E8EB] last:border-b-[0px]"
        >
          <div className="md:sticky md:w-1/4 text-sm md:mt-2.5">
            <span className={'text-[#5f6b7c]'}>{update.formattedDate}</span>
          </div>

          <div className="max-w-[588px]">
            <h1 className="text-[22px] md:text-2xl font-semibold tracking-[-0.5px] mb-4 md:mb-5 text-darkblue-700">
              {update.title}
            </h1>
            <div
              className={clsx('text-[15px] leading-6 content')}
              dangerouslySetInnerHTML={{ __html: update.content }}
            ></div>
          </div>
        </article>
      ))}
    </div>
  );
}
