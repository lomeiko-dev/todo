import { Button, Stack } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { IDefaultComponentsProps } from "shared/types/props.types";

interface IProps extends IDefaultComponentsProps {
  onClose: () => void;
  onConfirm: () => void;
}

export const SnackbarAction: React.FC<IProps> = (props) => {
  const { onClose, onConfirm, className, styleCSS } = props;

  return (
    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'10px'} className={classNames(className)} sx={styleCSS}>
      <Button onClick={onConfirm} variant="outlined" color="success">
        Yes
      </Button>
      <Button onClick={onClose} variant="outlined" color="error">
        No
      </Button>
    </Stack>
  );
};
