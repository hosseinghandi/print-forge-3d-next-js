import { LuLayers } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { SlFlag } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoReturnUpBack } from "react-icons/io5";

import type { IconList } from "@/types/list";

export const iconList = {
  Layer: LuLayers,
  World: GiWorld,
  Flag: SlFlag,
  SlFlag: SlFlag,
  Heart: CiHeart,
  Back: IoReturnUpBack,
} satisfies IconList;
