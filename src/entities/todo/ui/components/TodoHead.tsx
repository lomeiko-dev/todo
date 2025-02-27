import classNames from "classnames";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";

interface IProps extends IDefaultComponentsProps {
  title: string;
  description?: string;
  lineClamp?: number;
}

export const TodoHead: React.FC<IProps> = (props) => {
  const { description, title, className, styleCSS, lineClamp } = props;
  return (
    <Box className={classNames(className)} sx={styleCSS}>
      <Typography color="primary" variant="h6">
        {title}
      </Typography>
      <Typography sx={{ WebkitLineClamp: lineClamp }} className={"descr"} color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  );
};
