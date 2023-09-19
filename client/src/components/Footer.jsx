import React from "react";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
const linkCol1 = [
  {
    name: "Sitemap",
    link: "/sitemap",
  },
  {
    name: "Terms & Condition",
    link: "/Terms&Condition",
  },
  {
    name: "Privacy Policy",
    link: "/sitemap",
  },
  {
    name: "2257",
    link: "/sitemap",
  },
  {
    name: "ECU",
    link: "/sitemap",
  },
];

const social = [
  {
    comp: AiFillTwitterCircle,
  },
  {
    comp: AiFillGithub,
  },
  {
    comp: BsDiscord,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="h-auto w-full bg-[#151515] flex flex-col justify-center items-start py-0 px-[10vw]">
        <div className="flex w-full justify-between py-8 flex-wrap">
          <div className="flex flex-col">
            <h3 className="text-[#969696] text-xl font-bold pb-4">
              Information
            </h3>
            <ul className="flex flex-col gap-2">
              {linkCol1.map((item, key) => {
                return (
                  <>
                    <li className="">
                      <Link
                        to={item.link}
                        className="text-primary pb-2 font-normal "
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#969696] text-xl font-bold pb-4">
              Information
            </h3>
            <ul className="flex flex-col gap-2">
              {linkCol1.map((item, key) => {
                return (
                  <>
                    <li className="">
                      <Link
                        to={item.link}
                        className="text-primary pb-2 font-normal "
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#969696] text-xl font-bold pb-4">
              Information
            </h3>
            <ul className="flex flex-col gap-2">
              {linkCol1.map((item, key) => {
                return (
                  <>
                    <li className="">
                      <Link
                        to={item.link}
                        className="text-primary pb-2 font-normal "
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#969696] text-xl font-bold pb-4">
              Information
            </h3>
            <ul className="flex flex-col gap-2">
              {linkCol1.map((item, key) => {
                return (
                  <>
                    <li className="">
                      <Link
                        to={item.link}
                        className="text-primary pb-2 font-normal "
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" pb-2 font-normal text-[#969696] pb-8">Language:</div>
      </div>
      <div className="h-auto w-full bg-black flex justify-between items-center  px-[10vw] py-4">
        <div className="flex gap-4">
          {social.map((item, key) => {
            return (
              <>
                <div className="text-3xl ">{<item.comp />}</div>
              </>
            );
          })}
        </div>
        <div>
          <h2 className="text-[#969696] ">@Animhub.com,2023</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
