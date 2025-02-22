import { setAuthData } from "entities/auth";
import { useGetAuthDataQuery } from "features/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";

interface IProps {
  children: React.ReactNode;
}

export const AuthAuthProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  const { data } = useGetAuthDataQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate(RoutePath.home.path);
      dispatch(setAuthData(data));
    } else {
      navigate(RoutePath.auth.path);
    }
  }, [data]);

  return children;
};
