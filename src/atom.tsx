import { RecoilProps } from "RecoilModule";
import { atom } from "recoil";

export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
