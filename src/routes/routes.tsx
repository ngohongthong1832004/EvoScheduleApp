import React from "react";
import { lazy } from "react";

import { 
    PATH_HOME, 
    PATH_LESSON_TIME, 
    PATH_LOGIN, 
    PATH_PROFILE, 
    PATH_TABLE_TIME,
    PATH_SCHEDULE_TIME
    // PATH_SCHEDULE, 
    // PATH_SETTING 
} from "./paths";
import { Children } from "react";
import ScheduleTimePage from "../pages/scheduleTime";

const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/login"));
const ProfilePage = lazy(() => import("../pages/profile"));
const TimeTalePage = lazy(() => import("../pages/tableTime"));
const LessonTalePage = lazy(() => import("../pages/tableLesson"));
// const SettingPage = lazy(() => import("../pages/setting"));


export const routes = [
  {
    path: PATH_HOME,
    name: "Trang chủ",
    element: <HomePage />,
    show: true,
    children : []
  },
  {
    path: PATH_SCHEDULE_TIME,
    name: "Lịch dạy",
    element: <ScheduleTimePage />,
    show: true,
    children : []
  },
  {
    path: PATH_LOGIN,
    name: "LOGIN",
    element: <LoginPage />,
    show: false,
    children : []
  },
  {
    path: PATH_PROFILE,
    name: "PROFILE",
    element: <ProfilePage />,
    show: false,
    children : []
  },
  {
    path: PATH_TABLE_TIME,
    name: "Chọn lịch dạy",
    element: <TimeTalePage />,
    show: true,
    children : []
  },
  {
    path: PATH_LESSON_TIME,
    name: "Chọn môn dạy",
    element: <LessonTalePage />,
    show: true,
    children : []
  },
];
