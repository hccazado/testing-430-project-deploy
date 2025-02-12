import { Roboto } from "next/font/google";
import { Playwrite_VN } from "next/font/google";

export const playwrite = Playwrite_US_Trad({
  weight: '300',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});
