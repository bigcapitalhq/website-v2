import { describe } from 'node:test';

export const metadata = {
  title: 'OSS Friends | Bigcapital',
  description:
    'We are proud to collaborate with a diverse group of partners to promote open-source software.',
};

const Friends = [
  {
    name: 'BoxyHQ',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'Cal.com',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'ClassroomIO',
    description:
      'ClassroomIO is a no-code tool that allows you build and scale your own teaching platform with ease.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'BoxyHQ',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'Cal.com',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'ClassroomIO',
    description:
      'ClassroomIO is a no-code tool that allows you build and scale your own teaching platform with ease.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'BoxyHQ',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'Cal.com',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'ClassroomIO',
    description:
      'ClassroomIO is a no-code tool that allows you build and scale your own teaching platform with ease.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'BoxyHQ',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'Cal.com',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
  {
    name: 'ClassroomIO',
    description:
      'ClassroomIO is a no-code tool that allows you build and scale your own teaching platform with ease.',
    href: 'http://google.com',
    hrefLabel: 'Visit Google',
  },
];

export default async function OSSFriendsPage() {
  return (
    <div className={'grid-cols-3 grid gap-3 grid-flow-rows'}>
      {Friends.map((friend, index) => (
        <div
          key={index}
          className={'flex p-5 height-[100%] bg-[#f6f6f6] flex flex-col'}
        >
          <div className={'font-semibold text-lg mb-1'}>{friend.name}</div>
          <div className={'text-sm text-[#404854]'}>{friend.description}</div>

          <div className={'mt-auto pt-3'}>
            <a
              href={friend.href}
              target="_blank"
              rel="noopener noreferrer"
              className={'text-[#004dd0] font-semibold text-sm'}
            >
              {friend.hrefLabel}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                className={'h-[20px] w-[20px] inline ml-[2px]'}
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
