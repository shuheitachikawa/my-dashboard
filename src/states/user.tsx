import { atom } from "recoil";
import { CurrentUser } from "types";

// undifined: 認証完了までの状態
// null: 認証した結果ログインしていなかった場合の状態
export const currentUserState = atom<undefined | null | CurrentUser>({
  key: "CurrentUser",
  default: undefined,
});
