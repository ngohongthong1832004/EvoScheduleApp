import React, { useState } from "react";
import bgImg from "../../assets/bg.jpg"
import logoImg from "../../assets/logo.png"
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PATH_LOGIN } from "../../routes/paths";

export const ForgetPassModule = () => {
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
      <div className="w-[500px] h-[500px] z-[5]">
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
        <h1 className="text-[#095f90] text-xl mt-5">QUÊN MẬT KHẨU</h1>

        <form className="w-[80%]">
          <div className="mt-4 w-full">
            <input 
              className="w-full bg-white text-black py-2 p-4 rounded-lg"
              placeholder="Nhập mail xác nhận"
              type="test" 
            />
          </div>
        </form>
        <div className="w-[80%] flex justify-between items-center">
          <button
            className="w-full h-[60px] bg-[#007bff] mt-8 shadow-lg hover:opacity-90"
          >
            Lấy lại mật khẩu
          </button>
        </div>


        <div className="w-[80%] mt-auto flex justify-between items-center">
          <span className="block">
            <Link
              to={PATH_LOGIN}
            >Đăng nhập</Link>
          </span>
          <span className="block text-[8px]">@Copy rights {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
