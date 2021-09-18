import { useRecoilValue } from "recoil";
import { currentUserState } from "states/user";

export const useCurrentUser = () => {
  const currentUser = useRecoilValue(currentUserState);
  const isActiveChecking = currentUser === undefined;
  // isActiveChecking: ログイン情報取得中にtrue
  return {
    currentUser,
    isActiveChecking,
  };
};
