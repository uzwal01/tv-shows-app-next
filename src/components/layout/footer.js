import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-header-footer)] w-full py-8">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-4 flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/iFlix.png"
                width={130}
                height={100}
                alt="iFlix logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="text-sm">
            <p>
              <Link
                href="/"
                className="text-[var(--color-secondary)] hover:text-[var(--color-muted)] transition-colors duration-300"
              >
                i-Flix
              </Link>{" "}
              - Movies online, here you can watch movie ratings online for
              free without annoying advertising. Just come and search for
              the best movie you want to watch based on the latest ratings and
              votes.
            </p>
            <br />
            <p className="text-xs text-[var(--color-muted)]">
              Disclaimer: This site does not store any files on its server.
              All contents are provided by non-affiliated third parties.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center text-sm">
          <p>IMDb Clone © 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
