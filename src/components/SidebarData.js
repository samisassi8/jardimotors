import React from "react";
import { FaWrench } from "react-icons/fa";
import { AiFillHome, AiOutlinePicture, AiOutlinePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav_text",
  },
  {
    title: "Prestations",
    path: "/prestations",
    icon: <FaWrench />,
    cName: "nav_text",
  },
  {
    title: "photos",
    path: "/picture",
    icon: <AiOutlinePicture />,
    cName: "nav_text",
  },
  {
    title: "Téléphone",
    path: "/phone",
    icon: <AiOutlinePhone />,
    cName: "nav_text",
  },
  {
    title: "FindMe",
    path: "/findme",
    icon: <ImLocation />,
    cName: "nav_text",
  },
];
