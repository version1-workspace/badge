import { createContext } from "react";
// セットし他ファイルへ渡す。
export const BadgeContext = createContext<{
  cartAdded: boolean;
  setCartAdded: (value: boolean) => void;
}>({
  cartAdded: false,
  setCartAdded: () => {},
});
