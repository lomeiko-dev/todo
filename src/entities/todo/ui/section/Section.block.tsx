import { Box, Divider, Stack, Typography } from "@mui/material";
import classNames from "classnames";
import "./style.scss";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ISectionProps } from "entities/todo/model";
import { useState } from "react";

interface IProps extends IDefaultComponentsProps, ISectionProps {}

export const SectionBlock: React.FC<IProps> = (props) => {
  const { actionSlot, children, name, className, styleCSS } = props;

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(className, "section-todo-box")}
      sx={styleCSS}
    >
      <Stack className="header">
        <Typography color="primary" variant="h6" component="span">
          {name}
        </Typography>
        {hover && actionSlot}
      </Stack>
      <Divider />
      <Stack>{children}</Stack>
    </Box>
  );
};
