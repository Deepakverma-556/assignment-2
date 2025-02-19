"use client";
import { SLIDER_ICONS_LIST, SLIDER_LIST } from "@/app/utils/helper";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "30% top",
        end: "400% center",
        pin: true,
        scrub: 2,
      },
    });
    mm.add("(min-width:1200px) and (max-width:1596.99px)", () => {
      tl.fromTo(
        ".my-slider",
        {
          x: 100,
        },
        {
          xPercent: -260,
          duration: 10,
        },
        "0"
      );
      tl.fromTo(
        ".custom-line",
        {
          left: 0,
          width: 180,
        },
        {
          width: "100%",
          duration: 11,
        },
        "0"
      );
    });
    mm.add("(min-width:1000px) and (max-width:1200.99px)", () => {
      tl.fromTo(
        ".my-slider",
        {
          x: 0,
        },
        {
          xPercent: -330,
          duration: 10,
        },
        "0"
      );
      tl.fromTo(
        ".custom-line",
        {
          left: 0,
          width: 30,
        },
        {
          width: "100%",
          duration: 11,
        },
        "0"
      );
    });
    mm.add("(min-width:650px) and (max-width:999.99px)", () => {
      tl.fromTo(
        ".my-slider",
        {
          x: 0,
        },
        {
          xPercent: -320,
          duration: 10,
        },
        "0"
      );
      tl.fromTo(
        ".custom-line",
        {
          left: 0,
          width: 50,
        },
        {
          width: "100%",
          duration: 11,
        },
        "0"
      );
    });
    mm.add("(min-width:300px) and (max-width:649.99px)", () => {
      tl.fromTo(
        ".my-slider",
        {
          x: 0,
        },
        {
          xPercent: -340,
          duration: 10,
        },
        "0"
      );
       tl.fromTo(
         ".custom-line",
         {
           left: 0,
           width: 50,
         },
         {
           width: "100%",
           duration: 11,
         },
         "0"
       );
    });
  });

  return (
    <div
      id="hero"
      className="bg-black pt-[156px] max-lg:pt-32 max-sm:pt-28 pb-28 overflow-hidden min-h-screen"
    >
      <div className="max-w-[1172px] mx-auto px-4">
        <h2 className="max-w-[830px] mx-auto font-medium text-5xl max-md:text-4xl max-sm:text-3xl leading-[57.6px] text-white text-center">
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
      <div className="px-4 mx-auto w-full flex sm:gap-28 max-sm:gap-10 pt-[60px] max-md:pt-10 my-slider">
        {SLIDER_LIST.map((obj, i) => (
          <div
            key={i}
            className="flex max-sm:flex-wrap items-center w-full sm:gap-10 mx-auto justify-between lg:min-w-[1172px] max-lg:min-w-[1000px] max-md:min-w-[700px] max-sm:min-w-[375px] px-4"
          >
            <div className="sm:max-w-[461px] mx-auto">
              <Image
                src={obj.numberImage}
                alt={obj.numberImageAlt}
                width={297}
                height={187}
                className="pointer-events-none max-lg:h-[150px] max-lg:w-[200px] max-md:h-[70px] max-md:w-[100px] max-sm:h-[50px] max-sm:w-[50px]"
              />
              <h2 className="font-bold text-[32px] max-lg:text-2xl max-sm:text-xl max-sm:leading-6 leading-[39px] text-white">
                {obj.title}{" "}
                <span className="bg-gradient-to-r from-lightSky to-lightPurple bg-clip-text text-transparent">
                  {obj.gradientText}
                </span>
              </h2>
              <p className="font-poppins text-base max-md:text-sm max-sm:text-xs leading-[25px] text-white/90 pt-4">
                {obj.description} <br />
                <br /> {obj.secondDescription}
              </p>
            </div>
            <Image
              src={obj.image}
              width={614}
              height={427}
              alt={obj.imageAlt}
              className="max-lg:h-[350px] max-lg:w-[500px] max-md:h-[200px] max-md:w-[350px] max-sm:mt-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
