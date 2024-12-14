import React from "react";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="fotter"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className=" flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Take <span className="text-purple">Your</span> Digital
          Presence to the Next level
        </h1>
        <p className="text-white-200 md:MT-10 my-5 text-center">
          Reach out me today & let's Dicuss how can i help you reach your goal
        </p>
        <a href="mailto:sakshambasnet14@gmail.com">
          <Button
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className=" flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Saksham Basnet
        </p>
        <div className=" flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.img} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
              <img src={profile.img} alt="profile" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;