import React from 'react';
import ReactWOW from 'react-wow';
import Logo from '../icons/Bigcapital';
import Link from 'next/link';
import clsx from 'classNames';

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

function NavItem({ children, className }: NavItemProps) {
  return <div className={className}>{children}</div>;
}

interface NavLinkProps {
  children: React.ReactNode;
  className?: string;
}

function NavLink({ children, className }: NavLinkProps) {
  return (
    <div
      className={clsx(
        'h-[32px] px-[14px] weight-semibold leading-[32px]',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Top navigation bar.
 */
export function TopBar({ beforeNavbar, afterNavbar }) {
  return (
    // <ReactWOW animation="fadeIn" duration={'1s'}>
    <div className="topbar" id="topbar">
      {beforeNavbar}

      <div className="container mx-auto px-4 mx-auto">
        <div className={'py-[14px] flex flex-nowrap'}>
          <div className={'py-[5px]'}>
            <Link href={'/'}>
              <Logo width={200} />
            </Link>
          </div>

          {/* <Navbar.Toggle /> */}

          <div className={'flex flex-grow items-center'}>
            <div className="flex flex-row ml-auto">
              <NavItem className={'topbar__start-item'}>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=bigcapitalhq&repo=bigcapital&type=star&size=large&count=true"
                  frameborder="0"
                  scrolling="0"
                  width="150"
                  height="30"
                  title="Bigcapital Github Repository"
                ></iframe>
              </NavItem>

              <NavItem>
                <NavLink to="/#features" as={Link}>
                  Features
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href={'https://docs.bigcapital.ly'} target="_blank">
                  Docs
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href={'https://discord.gg/c8nPBJafeb'} target="_blank">
                  Community
                </NavLink>
              </NavItem>

              <div className="w-[1px] bg-[#bec3d5] mr-1 ml-1"></div>
              {/* 
              <NavItem className={'d-none d-lg-block'}>
                <a
                  class="btn btn-outline-secondary"
                  href={'https://app.bigcapital.ly/'}
                >
                  Sign In
                </a>
              </NavItem> */}

              <NavItem className={'d-none d-lg-block ml-4'}>
                <NavLink
                  className="bg-indigo h-[32px] rounded-full text-white"
                  href={'https://app.bigcapital.ly/auth/register'}
                >
                  Sign Up
                </NavLink>
              </NavItem>

              <div className="ml-4 d-lg-none">
                <NavLink
                  as={Link}
                  to={'https://app.bigcapital.ly/'}
                  className="border border-1-blue rounded-full"
                >
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {afterNavbar}
    </div>
    // </ReactWOW>
  );
}
