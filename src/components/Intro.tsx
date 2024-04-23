import Link from 'next/link';
import React from 'react';
import ReactWOW from 'react-wow';

/**
 * Homepage - Introduction.
 */
export default function Page() {
  return (
    <div className={'text-center py-[80px] animate__animated animate__fadeIn'} id="intro">
      <div className="container lg-auto mx-auto px-4">
        <h1
          className={
            'text-[50px] leading-[64px] font-extrabold text-darkblue-700 mx-auto mb-[10px] tracking-tight text-center max-w-[90%]'
          }
        >
          Online accounting software, built to automate business financial
          processes.
        </h1>

        <h2
          className={
            'text-[20px] font-normal text-blue-900 leading-8 mx-auto mb-[25px] text-center max-w-[80%]'
          }
        >
          Control your business bookkeeping with automated accounting, to run
          intelligent reports for faster decision-making.
        </h2>

        <div className={'text-center flex gap-4 justify-center'}>
          <Link
            className={
              'inline-block h-[44px] text-lg leading-[44px] rounded-full px-5 bg-indigo text-white hover:bg-indigo-dark'
            }
            href="https://app.bigcapital.ly/auth/register"
          >
            Start Accounting
          </Link>

          <Link
            className={
              'inline-block rounded-full text-lg text-darkblue-900 px-5 border border-darkblue-700 text-darkblue-600 h-[44px] leading-[44px] hover:text-white hover:bg-darkblue-600'
            }
            href="https://docs.bigcapital.ly/deployment/docker"
            target="_blank"
          >
            Self Host
          </Link>
        </div>
      </div>
    </div>
  );
}
