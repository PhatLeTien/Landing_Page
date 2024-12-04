import React from "react";
import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer container className="bg-white py-10">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="text-3xl text-green-400 font-bold uppercase">
              Rabito English
            </span>
            <p className="mt-5 text-gray-600 max-w-[260px]">
              Our vision is to provide convenience and help improve your English
              learning.
            </p>
          </div>
          <div className="flex justify-around gap-10">
            {/* About Section */}
            <div className="ml-[-30px] lg:ml-[180px]">
              <Footer.Title title="About" className="text-black font-bold" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  How to use
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Featured
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Partnership
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Business Relations
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Community Section */}
            <div className="ml-[10px] lg:ml-[80px]">
              <Footer.Title title="Community" className="text-black font-bold whitespace-nowrap" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Events
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Blog
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Invite a friend
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Socials Section */}
            <div className="ml-[50px] lg:ml-[90px]">
              <Footer.Title title="Socials" className="text-black font-bold" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Discord
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Twitter
                </Footer.Link>
                <Footer.Link href="#" className="text-gray-600 font-semibold whitespace-nowrap">
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-8" />
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
          <Footer.Copyright
            href="#"
            by="RABITO English. All rights reserved"
            year={2024}
            className="text-black font-semibold"
          />
          <div className="mt-4 flex space-x-6 text-sm font-semibold sm:mt-0">
            <p>Privacy &amp; Policy</p>
            <p>Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
