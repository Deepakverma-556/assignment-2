"use client"
import { SLIDER_ICONS_LIST, SLIDER_LIST } from '@/app/utils/helper';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".my-slider", {
      xPercent: -12.9 * (SLIDER_LIST.length -1),
      ease: "none",
      scrollTrigger: {
        trigger: ".my-slider",
        pin: true,
        scrub: 1,
        end: "2000",
      },
    });
  }, []);

  return (
    <div className="bg-black slider-section pt-[156px] pb-28 overflow-hidden">
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
      <div className="border border-lightGray mt-3"></div>
      <div className="flex w-max my-slider left-0">
        {SLIDER_LIST.map((item, i) => (
          <div key={i} className="min-w-[1440px]">
            <div className="flex gap-[65px] items-center container max-w-[1140px] mx-auto">
              <div className="flex flex-col max-w-[461px]">
                <h3 className="font-roboto font-black text-[256px] leading-[100%] bg-gradient-to-b from-lightSky/10 to-lightPurple/10 bg-clip-text text-transparent">
                  0{i+1}
                </h3>
                <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                  {item.title} <span className='bg-gradient-to-r from-lightSky to-lightPurple bg-clip-text text-transparent'>{item.gradientText}</span>
                </h4>
                <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                  {item.description}
                </p>
                <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white">
                  {item.secondDescription}
                </p>
              </div>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={614}
                height={417}
                className="shadow-[0px_4px_58.7px_0px_#00DDFF26] pointer-events-none rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero