import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps extends IDefaultComponentsProps {
  children: React.ReactNode;
  actionSlot?: React.ReactNode;
  name: string;
}
export const SectionItem: React.FC<IProps> = (props) => {
  const { children, className, styleCSS, name, actionSlot } = props;

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Accordion
      onMouseEnter={(handleMouseEnter)}
      onMouseLeave={handleMouseLeave}
      defaultExpanded
      className={classNames(className, "section-todo-accardion")}
      sx={styleCSS}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
        <Typography color="primary" variant="h6" component="span">
          {name}
        </Typography>
        {hover && actionSlot}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
