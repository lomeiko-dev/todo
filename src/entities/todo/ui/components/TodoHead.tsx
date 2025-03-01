import classNames from "classnames";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";

interface IProps extends IDefaultComponentsProps {
  title: string;
  description?: string;
  lineClamp?: number;
  isCross?: boolean;
}

export const TodoHead: React.FC<IProps> = (props) => {
  const { description, title, className, styleCSS, lineClamp, isCross = false } = props;

  const mods = {
    ['todo-cross-text']: isCross
  }
  
  return (
    <Box className={classNames(className, mods)} sx={styleCSS}>
      <Typography className="todo-title" color="primary" variant="h6">
        {title}
      </Typography>
      <Typography sx={{ WebkitLineClamp: lineClamp }} className={"todo-descr"} color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  );
};
