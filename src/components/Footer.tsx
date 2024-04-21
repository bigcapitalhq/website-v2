import React from 'react';
import Link from 'next/link';
// import Logo from '../Logo';

/**
 * Social media links widget.
 */
function SocialWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">Socials</strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="https://discord.gg/c8nPBJafeb">
            Discord
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/BigcapitalHQ">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/bigcpaitalhq">
            Medium
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/linkedin">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

function CompanyWidget() {
  return (
    <div className="mb-[60px]">
      <strong className="footer__widget-title d-block">Legal</strong>
      <ul className="footer__widget-list">
        <li>
          <Link href={'/legal/terms-of-use'}>Terms & conditions</Link>
        </li>
        <li>
          <Link href={'/legal/privacy-policy'}>Privacy policy</Link>
        </li>
        <li>
          <a target="_blank" href="https://discord.gg/c8nPBJafeb">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}

function PagesWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">Content</strong>
      <ul className="footer__widget-list">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <a target="_blank" href="https://docs.bigcapital.ly">
            Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#000931] text-white text-opacity-65 pt-[50px]">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="col-lg-3 col-md-4">
            <div className="footer__widget">
              <a className="footer-logo d-block mt-1" href="#">
                {/* <Logo /> */}
              </a>
              <div className="footer-text mb-0 mt-3">
                <p>
                  Online accounting software, built to automate business
                  financial processes.
                </p>
                <p>
                  <strong>Email</strong>: ahmed@bigcapital.ly
                </p>
              </div>
            </div>
          </div>

          <div className="columns-3">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <PagesWidget />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <CompanyWidget />
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <SocialWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-opacity-65 tracking-tight text-center">
        <div className="container mx-auto px-4">
          <div className="border-t border-opacity-20 pt-7 pb-7">
            <p>Copyright © 2023 — Made by Bigcapital Technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
