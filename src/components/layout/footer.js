import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[var(--color-header-footer)] w-full py-8">
        <div className="flex justify-between items-center gap-4 max-w-[1280px] mx-auto px-4">
          <div className="w-[50%]">
            <div className="mb-4">
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
            <div className="flex-col items-center text-sm">
              <p>
                <Link
                  href="/"
                  className="text-[var(--color-secondary)] hover:text-[var(--color-muted)] transition-colors duration-300"
                >
                  i-Flix
                </Link>{" "}
                - Movies online, here you can watch movie ratings online for
                free without annoying of advertising, just come and search for
                the best movie you want to watch based on the latest ratings and
                votes.
              </p>
              <br />
              <p className="text-xs">
                Disclaimer: This site does not store any files on its server.
                All contents are provided by non-affiliated third parties.
              </p>
              <br />
            </div>
          </div>
          <div className="w-[50%] text-center">
            <p>IMDb Clone © 2025. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
