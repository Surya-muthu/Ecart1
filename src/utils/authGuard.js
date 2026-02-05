import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Slice/authSlice";
import { isValid } from "./token";

export const useAuthGuard = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken, initialized } = useSelector((s) => s.auth);

  useEffect(() => {
    if (!initialized) return;
    if (!isValid(accessToken) && !isValid(refreshToken)) {
      localStorage.clear();
      dispatch(logout());
    }
  }, [accessToken, refreshToken, initialized, dispatch]);
};
