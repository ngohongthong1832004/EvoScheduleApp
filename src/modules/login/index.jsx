import React, { useState } from "react";
import bgImg from "../../assets/bg.jpg"
import logoImg from "../../assets/logo.png"
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { PATH_FORGET_PASSWORD } from "../../routes/paths";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LoginModule = () => {
  const [captchaSrc, setCaptchaSrc] = useState("/WebCommon/GetCaptcha");

  const refreshCaptcha = (e) => {
    e.preventDefault();
    setCaptchaSrc(`/WebCommon/GetCaptcha?r=${Math.random()}`);
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="relative w-[100vw] h-[100vh] flex justify-center items-center gap-10">
      <img className="absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] object-cover z-[2]" src={bgImg} alt="bg"></img>
      <div className=" w-[500px] h-[500px] z-[5]">
        <Slider {...settings}>
          <div>
            <img className="object-cover" src={slide1} alt="logo"></img>
          </div>
          <div>
            <img className="object-cover" src={slide2} alt="logo"></img>
          </div>
          <div>
            <img className="object-cover" src={slide3} alt="logo"></img>
          </div>
        </Slider>
      </div>

      <div className="flex flex-col justify-start items-center w-[400px] h-[500px] bg-[#dee6e9]/70 z-[5] rounded-lg p-5">  
        <img className="object-cover" src={logoImg} alt="logo"></img>
        <h1 className="text-[#095f90] text-xl mt-5">ĐĂNG NHẬP HỆ THỐNG</h1>

        <form className="w-[80%]">
          <div className="mt-4 w-full">
            <input 
              className="w-full bg-white text-black py-2 p-4 rounded-lg"
              placeholder="Nhập tên đang nhập"
              type="test" 
            />
          </div>
          <div className="mt-4 w-full">
            <input 
              className="w-full bg-white text-black py-2 p-4 rounded-lg"
              placeholder="Nhập mật khẩu"
              type="test" 
            />
          </div>

        </form>

        <div className="w-[80%] mt-4 flex justify-between items-center">
          <div className="w-full">
            <input 
              className="w-full bg-white text-black py-2 p-4 rounded-lg"
              placeholder="Nhập mã"
              type="test" 
            />
          </div>
          <button className="mx-4">
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.438 11.054C18.914 15.869 14.856 19.5 10 19.5C6.365 19.5 3.083 17.417 1.5 14.22V18C1.5 18.276 1.276 18.5 1 18.5C0.724 18.5 0.5 18.276 0.5 18V13C0.5 12.724 0.724 12.5 1 12.5H6C6.276 12.5 6.5 12.724 6.5 13C6.5 13.276 6.276 13.5 6 13.5H2.28589C3.64689 16.51 6.648 18.5 10 18.5C14.345 18.5 17.9751 15.252 18.4431 10.946C18.4731 10.672 18.7339 10.4739 18.9939 10.5029C19.2699 10.5329 19.468 10.78 19.438 11.054ZM19 1.5C18.724 1.5 18.5 1.724 18.5 2V5.78003C16.917 2.58303 13.635 0.5 10 0.5C5.145 0.5 1.08701 4.13104 0.562012 8.94604C0.532012 9.22005 0.729883 9.46707 1.00488 9.49707C1.02288 9.49907 1.04106 9.5 1.06006 9.5C1.31206 9.5 1.52791 9.30995 1.55591 9.05396C2.02491 4.74695 5.65502 1.5 9.99902 1.5C13.351 1.5 16.3519 3.49 17.7129 6.5H14C13.724 6.5 13.5 6.724 13.5 7C13.5 7.276 13.724 7.5 14 7.5H18.448C18.449 7.5 18.4499 7.5 18.4509 7.5H19C19.276 7.5 19.5 7.276 19.5 7V2C19.5 1.724 19.276 1.5 19 1.5Z" fill="#061114"/>
              </svg>
            </span>
          </button>
          <div className="w-full">
            <input 
              value={Math.floor(Math.random()*1000)}
              className="w-full bg-white text-black py-2 p-4 rounded-lg"
              // placeholder=""
              type="test" 
            />
          </div>
        </div>
        <div className="w-[80%] flex justify-between items-center">
          <button
            className="w-full h-[60px] bg-[#007bff] mt-8 shadow-lg hover:opacity-90"
          >
            Đăng nhập
          </button>
        </div>


        <div className="w-[80%] mt-auto flex justify-between items-center">
          <span className="block">
            <Link
              to={PATH_FORGET_PASSWORD}
            >Quên mật khẩu</Link>
          </span>
          <span className="block text-[8px]">@Copy rights {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
