import { ROUTES } from "@/routes";
import {IoFootballOutline ,IoNewspaperOutline } from 'react-icons/io5'
import { CiStar } from "react-icons/ci";
export const NAVIGATION_LINK = [
  {
    id: "scores",
    href: ROUTES.SCORE,
    title: "Scores",
    icon: <IoFootballOutline/>
  },
  {
    id: "favourites",
    href: ROUTES.FAVOURITE,
    title: "Favourites",
    icon: <CiStar/>
  },
  {
    id: "news",
    href: ROUTES.NEWS,
    title: "News",
    icon: <IoNewspaperOutline/>
  },
] ;
