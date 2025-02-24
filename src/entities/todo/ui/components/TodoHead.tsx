import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { IDefaultComponentsProps } from "shared/types/props.types";
import "../style.scss";

interface IProps extends IDefaultComponentsProps {
  title: string;
  description?: string;
  lineClamp?: number;
}

export const TodoHead: React.FC<IProps> = (props) => {
  const { description, title, className, styleCSS, lineClamp } = props;
  return (
    <Box className={classNames(className, "head")} sx={styleCSS}>
      <Typography color="primary" variant="h6">
        {title}
      </Typography>
      <Typography sx={{ WebkitLineClamp: lineClamp }} className={"descr"} color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  );
};
