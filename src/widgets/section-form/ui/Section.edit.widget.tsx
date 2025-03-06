import React, { useState } from "react";
import classNames from "classnames";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { SectionEdit } from "features/todo-form";
import { useAppDispatch } from "shared/lib/hooks";
import { ISectionTodos, sectionAdded } from "entities/todo";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {}

export const SectionEditWidget: React.FC<IProps> = (props) => {
  const { className, styleCSS } = props;

  const dispatch = useAppDispatch();

  const [showForm, setShow] = useState(false);

  const handleToggleForm = () => {
    setShow(!showForm);
  };

  const handleAddedSection = (data: ISectionTodos) => {
    dispatch(sectionAdded(data));
    handleToggleForm();
  };

  return (
    <Box className={classNames(className)} sx={styleCSS}>
      <Button
        onClick={handleToggleForm}
        color="secondary"
        sx={{ height: "50px" }}
        size="large"
        fullWidth
        endIcon={<AddIcon />}
        variant="outlined"
      >
        <Typography>section</Typography>
      </Button>
      <Dialog open={showForm} onClose={handleToggleForm}>
        <SectionEdit onClose={handleToggleForm} onAddedSection={handleAddedSection} />
      </Dialog>
    </Box>
  );
};
