import { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Button, Paper } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { AuthProcessor } from "./components/Auth.processor";
import { useWindowSize } from "@siberiacancode/reactuse";

interface IProps extends IDefaultComponentsProps {}

export const AuthWidget: React.FC<IProps> = (props) => {
  const { className, styleCSS } = props;

  const [isHover, setHover] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<"log in" | "sign up">("sign up");
  const [animateShake, setAnimateShake] = useState<boolean>(true);

  const { width } = useWindowSize();

  const toggleHover = () => {
    setHover(!isHover);
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === "log in" ? "sign up" : "log in");
    setAnimateShake(true);
  };

  useEffect(() => {
    if (animateShake) {
      setTimeout(() => {
        setAnimateShake(false);
      }, 700);
    }
  }, [animateShake]);

  const mods = {
    [style.shake]: animateShake,
    [style.paper_mobile]: width < 768,
  };

  return (
    <Paper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      elevation={isHover ? 20 : 6}
      className={classNames(className, style.paper, mods)}
      style={styleCSS}
    >
      <h2>Authorization</h2>
      <AuthProcessor isMobile={width < 768} authMode={authMode} />
      <Button onClick={toggleAuthMode} size={false ? "small" : "medium"} fullWidth variant="text">
        {authMode === "log in" ? "sign up" : "log in"}
      </Button>
    </Paper>
  );
};
