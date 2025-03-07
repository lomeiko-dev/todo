import { Typography } from "@mui/material";
import style from "./style.module.scss";
import { IDefaultComponentsProps } from "shared/types/props.types";
import classNames from "classnames";

interface IProps extends IDefaultComponentsProps {
  children: React.ReactNode;
  namePage?: string;
}

export const Page: React.FC<IProps> = (props) => {
  const { children, namePage, className, styleCSS } = props;

  return (
    <div className={classNames(className, style.page)} style={styleCSS}>
      <Typography textAlign={"center"} variant="h3" color="secondary">
        {namePage}
      </Typography>
      {children}
    </div>
  );
};
