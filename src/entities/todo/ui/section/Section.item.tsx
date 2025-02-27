import React from "react";
import classNames from "classnames";
import "./style.scss";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps extends IDefaultComponentsProps {
  children: React.ReactNode;
  name: string;
}
export const SectionItem: React.FC<IProps> = (props) => {
  const { children, className, styleCSS, name } = props;

  return (
    <div>
      <Accordion className={classNames(className, "section-todo-accardion")} sx={styleCSS}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography color="primary" variant="h6" component="span">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};
