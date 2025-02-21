import style from "./styles.module.scss";
import classnames from "classnames";
import { RegistrationForm } from "features/auth";
// import background_night from 'shared/assets/bg/auth-night.background.jpg' for night theme
import background_light from "shared/assets/bg/auth.background.jpg";

const AuthPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background_light})` }} className={classnames(style.page)}>
      <RegistrationForm onSuccessSubmitForm={() => null}/>
    </div>
  );
};

export default AuthPage;
