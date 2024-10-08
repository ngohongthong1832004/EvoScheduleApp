import React from 'react';
import MainLogo from "../../assets/MainLogo.png";
import { Link } from "react-router-dom";


export const Header = ({ isLogin, toggleNavVisibility }) => {
  return (
    <div className='flex justify-between items-center px-5 bg-white shadow-sm h-full'>
      <div className='text-black'>search</div>
      <div className='flex justify-end items-center gap-10'>
        <div className="flex justify-start items-center text-black h-full cursor-pointer">
          <img
            src={MainLogo}
            alt="logo"
            className="w-[32px] h-[32px] rounded-full"
          />
          <h1 className="font-semibold text-[12px]">EvoSchedule</h1>
        </div>
        <div className="flex justify-start items-center text-black h-full cursor-pointer">
          <span>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0.5C16.621 0.5 15.5 1.622 15.5 3C15.5 4.378 16.621 5.5 18 5.5C19.379 5.5 20.5 4.378 20.5 3C20.5 1.622 19.379 0.5 18 0.5ZM18 4.5C17.173 4.5 16.5 3.827 16.5 3C16.5 2.173 17.173 1.5 18 1.5C18.827 1.5 19.5 2.173 19.5 3C19.5 3.827 18.827 4.5 18 4.5ZM19.5 9V14C19.5 16.29 18.29 17.5 16 17.5H4C1.71 17.5 0.5 16.29 0.5 14V5C0.5 2.71 1.71 1.5 4 1.5H12C12.276 1.5 12.5 1.724 12.5 2C12.5 2.276 12.276 2.5 12 2.5H4C2.271 2.5 1.5 3.271 1.5 5V14C1.5 15.729 2.271 16.5 4 16.5H16C17.729 16.5 18.5 15.729 18.5 14V9C18.5 8.724 18.724 8.5 19 8.5C19.276 8.5 19.5 8.724 19.5 9ZM10.312 10.11L14.687 6.61C14.905 6.438 15.2179 6.473 15.3899 6.688C15.5619 6.904 15.528 7.21801 15.312 7.39101L10.937 10.891C10.661 11.112 10.331 11.222 9.99902 11.222C9.66702 11.222 9.33804 11.112 9.06104 10.891L4.68604 7.39101C4.47004 7.21801 4.43591 6.904 4.60791 6.688C4.78091 6.472 5.09504 6.438 5.31104 6.61L9.68604 10.11C9.87104 10.257 10.129 10.257 10.312 10.11Z" fill="#061114" />
            </svg>
          </span>
        </div>
        <div className="flex justify-start items-center text-black h-full cursor-pointer">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1673 20.252C13.7113 21.033 12.9033 21.5 12.0053 21.5C11.1073 21.5 10.2983 21.033 9.8433 20.252C9.7043 20.013 9.7853 19.707 10.0243 19.568C10.2613 19.429 10.5683 19.51 10.7083 19.748C10.9823 20.219 11.4673 20.5 12.0063 20.5C12.5443 20.5 13.0293 20.219 13.3043 19.748C13.4433 19.51 13.7513 19.43 13.9883 19.568C14.2263 19.707 14.3063 20.014 14.1673 20.252ZM20.3913 17.688C20.3723 17.665 18.5003 15.292 18.5003 12.5V10C18.5003 9.724 18.2763 9.5 18.0003 9.5C17.7243 9.5 17.5003 9.724 17.5003 10V12.5C17.5003 14.624 18.4263 16.485 19.0523 17.5H4.9483C5.5743 16.485 6.5003 14.624 6.5003 12.5V9C6.5003 5.967 8.9673 3.5 12.0003 3.5C12.2763 3.5 12.5003 3.276 12.5003 3C12.5003 2.724 12.2763 2.5 12.0003 2.5C8.4163 2.5 5.5003 5.416 5.5003 9V12.5C5.5003 15.281 3.6283 17.664 3.6093 17.688C3.4893 17.838 3.4663 18.044 3.5493 18.217C3.6323 18.39 3.80729 18.5 3.99929 18.5H19.9993C20.1913 18.5 20.3663 18.39 20.4503 18.217C20.5343 18.043 20.5113 17.838 20.3913 17.688ZM14.5003 5C14.5003 3.622 15.6223 2.5 17.0003 2.5C18.3783 2.5 19.5003 3.622 19.5003 5C19.5003 6.378 18.3783 7.5 17.0003 7.5C15.6223 7.5 14.5003 6.378 14.5003 5ZM15.5003 5C15.5003 5.827 16.1733 6.5 17.0003 6.5C17.8273 6.5 18.5003 5.827 18.5003 5C18.5003 4.173 17.8273 3.5 17.0003 3.5C16.1733 3.5 15.5003 4.173 15.5003 5Z" fill="#061114" />
            </svg>
          </span>
        </div>
        <div className="flex justify-start items-center text-black h-full cursor-pointer">
          <Link
            to={isLogin ? "/profile" : "/login"}
          >
            <span>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 8V1C8.5 0.724 8.724 0.5 9 0.5C9.276 0.5 9.5 0.724 9.5 1V8C9.5 8.276 9.276 8.5 9 8.5C8.724 8.5 8.5 8.276 8.5 8ZM13.251 3.63794C13.013 3.49994 12.7059 3.57909 12.5669 3.81909C12.4279 4.05809 12.509 4.36393 12.749 4.50293C15.062 5.84893 16.5 8.33898 16.5 11.001C16.5 15.137 13.136 18.501 9 18.501C4.864 18.501 1.5 15.137 1.5 11.001C1.5 8.33898 2.93798 5.84893 5.25098 4.50293C5.48998 4.36393 5.57111 4.05809 5.43311 3.81909C5.29111 3.58009 4.98602 3.50094 4.74902 3.63794C2.12802 5.16194 0.5 7.984 0.5 11C0.5 15.687 4.313 19.5 9 19.5C13.687 19.5 17.5 15.687 17.5 11C17.5 7.983 15.872 5.16194 13.251 3.63794Z" fill="#061114" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
