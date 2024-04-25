'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel } from './Carousel';

function ShowcaseCarousel() {
  return (
    <Carousel>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-3.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>

      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-10.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>

      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-4.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-5.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-6.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-7.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </Carousel>
  );
}

interface ShowcaseBrowserProps {
  children: React.ReactNode;
}
// width: 950px;
        // padding-left: 10px;
        // padding-right: 10px;

function ShowcaseBrowser({ children }: ShowcaseBrowserProps) {
  return (
    <div className="pl-3.5 pr-3.5 w-[950px] md:w-full px-[10px] md:px[15px]">
      <div className={'flex h-[18px] rounded-t-lg bg-[#6d7688]'}>
        <div className={'flex ml-4 gap-2'}>
          <span
            className={
              'self-center block h-1.5 w-1.5 bg-white rounded-lg opacity-60'
            }
          ></span>
          <span
            className={
              'self-center block h-1.5 w-1.5 bg-white rounded-lg opacity-60'
            }
          ></span>
          <span
            className={
              'self-center block h-1.5 w-1.5 bg-white rounded-lg opacity-60'
            }
          ></span>
        </div>
      </div>

      <div className={'min-h-[600px]'}>{children}</div>
    </div>
  );
}

export function Showcase() {
  return (
    <div className="z-10 relative animate__animated animate__fadeIn" id="showcase">
      <div className="ml-auto mr-auto max-w-[1220px]">
        <div className="pb-10 w-full relative mb-[-360px] overflow-hidden">
          <ShowcaseCarousel />
        </div>
      </div>
    </div>
  );
}
