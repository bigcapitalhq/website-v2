'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface CarouselProps {
  items: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToIndex = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="absolute z-[15] flex justify-center mx-[15%] bottom-0 inset-x-0">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={
              'box-content w-10 h-1 pr-1 pl-1 cursor-pointer bg-white relative bg-transparent py-4 ' +
              (currentIndex === index ? 'opacity-75' : 'opacity-30')
            }
          >
            <span className="block w-full h-full rounded-sm bg-white"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

function ShowcaseCarousel() {
  const carouselItems = [
    <div key={1}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-3.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
    <div key={2}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-10.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
    <div key={3}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-4.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
    <div key={4}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-5.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
    <div key={5}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-6.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
    <div key={6}>
      <ShowcaseBrowser>
        <Image
          src="/showcase/showcase-7.png"
          alt=""
          width="1190"
          height="845"
        />
      </ShowcaseBrowser>
    </div>,
  ];

  return <Carousel items={[...carouselItems]} />;
}

interface ShowcaseBrowserProps {
  children: React.ReactNode;
}

function ShowcaseBrowser({ children }: ShowcaseBrowserProps) {
  return (
    <div className="pl-3.5 pr-3.5">
      <div className={'flex h-4 rounded-t-lg bg-[#6d7688]'}>
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

      <div className={'min-h-[720px]'}>{children}</div>
    </div>
  );
}

export function Showcase() {
  return (
    <div className="z-10 relative" id="showcase">
      <div className="ml-auto mr-auto max-w-[1220px]">
        <div className="pb-10 w-full relative mb-[-360px]">
          <ShowcaseCarousel />
        </div>
      </div>
    </div>
  );
}
