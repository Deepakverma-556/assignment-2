"use client";
import { SLIDER_ICONS_LIST, SLIDER_LIST } from "@/app/utils/helper";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        markers: true,
        start: "30% top",
        end: "400% center",
        pin: true,
        scrub: 2,
      },
    });
    tl.fromTo(
      ".my-slider",
      {
        x: 100,
      },
      {
        xPercent: -310,
        duration: 10,
      } , "0"
    );
    tl.fromTo(
      ".custom-line",
      {
        left: 0,
        width: 100,
      },
      {
        width: "100%",
        duration: 9,
      },
      "0"
    );
  });

  return (
    <div
      id="hero"
      className="bg-black pt-[156px] pb-28 overflow-hidden min-h-screen"
    >
      <div className="max-w-[1172px] mx-auto px-4">
        <h2 className="max-w-[830px] mx-auto font-medium text-5xl leading-[57.6px] text-white text-center">
          Transforming Secure, Modern{" "}
          <span className="bg-gradient-to-r from-lightPurple to-lightSky bg-clip-text text-transparent">
            Development
          </span>{" "}
          with AdaptsAI
        </h2>
        <div className="flex items-center justify-between pt-[60px]">
          {SLIDER_ICONS_LIST.map((obj, i) => (
            <div
              key={i}
              className="size-[58px] border border-lightBlue rounded-md flex items-center justify-center"
            >
              {obj}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-lightGray line mt-3 max-w-[1440px] mx-auto">
        <div className="custom-line h-[1px] bg-lightSky mt-3 max-w-[1440px]"></div>
      </div>
      <div className="px-4 mx-auto w-full flex gap-28 pt-[60px] my-slider">
        {SLIDER_LIST.map((obj, i) => (
          <div
            key={i}
            className="flex items-center w-full mx-auto justify-between min-w-[1172px]"
          >
            <div className="max-w-[461px] mx-auto">
              <Image
                src={obj.numberImage}
                alt={obj.numberImageAlt}
                width={297}
                height={187}
              />
              <h2 className="font-bold text-[32px] leading-[39px] text-white">
                {obj.title}{" "}
                <span className="bg-gradient-to-r from-lightSky to-lightPurple bg-clip-text text-transparent">
                  {obj.gradientText}
                </span>
              </h2>
              <p className="font-poppins text-base leading-[25px] text-white/90 pt-4">
                {obj.description} <br />
                <br /> {obj.secondDescription}
              </p>
            </div>
            <Image
              src={obj.image}
              width={614}
              height={427}
              alt={obj.imageAlt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
