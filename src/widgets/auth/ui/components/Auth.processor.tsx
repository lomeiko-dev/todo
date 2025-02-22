import { CircularProgress } from "@mui/material";
import { setAuthData } from "entities/auth";
import {
  LoginFormLazy,
  RegistrationFormLazy,
  typeLoginBody,
  typeRegisterBody,
  useLoginMutation,
  useRegisterMutation,
} from "features/auth";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RoutePath } from "shared/config/route";
import { parseError } from "shared/lib/utils";

interface IProps {
  authMode: "log in" | "sign up";
  isMobile?: boolean;
}

export const AuthProcessor: React.FC<IProps> = React.memo((props) => {
  const { authMode, isMobile } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerQuery, resultRegister] = useRegisterMutation();
  const [loginQuery, resultLogin] = useLoginMutation();

  async function onSubmit<T extends typeRegisterBody | typeLoginBody>(data: T) {
    authMode === "sign up" ? await registerQuery(data as typeRegisterBody) : await loginQuery(data);
  }

  useEffect(() => {
    const result = authMode === "sign up" ? resultRegister : resultLogin;

    if (result.isSuccess && result.data) {
      navigate(RoutePath.home.path);
      dispatch(setAuthData(result.data));
    }
  }, [resultRegister, resultLogin]);

  return (
    <Suspense fallback={<CircularProgress />}>
      {authMode === "sign up" ? (
        <RegistrationFormLazy
          isMobile={isMobile}
          errorList={parseError(resultRegister.error)}
          isFetching={resultRegister.isLoading}
          onSuccessSubmitForm={onSubmit<typeRegisterBody>}
        />
      ) : (
        <LoginFormLazy
          isMobile={isMobile}
          errorList={parseError(resultLogin.error)}
          isFetching={resultRegister.isLoading}
          onSuccessSubmitForm={onSubmit<typeLoginBody>}
        />
      )}
    </Suspense>
  );
});
