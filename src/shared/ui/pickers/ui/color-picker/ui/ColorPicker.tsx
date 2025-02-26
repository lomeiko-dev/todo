import classNames from "classnames";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover, IconButton, Box, Tooltip, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface IProps extends IDefaultComponentsProps {
  value?: string
  onChange?: (color: string) => void
}

export const ColorPicker: React.FC<IProps> = (props) => {
  const { className, styleCSS, value, onChange } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCopied(false);
  };

  const open = Boolean(anchorEl);

  const handleCopy = () => {
    navigator.clipboard.writeText(value || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box className={classNames(className)} sx={styleCSS}>
      <IconButton
        onClick={handleClick}
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          border: "2px solid #ddd",
          backgroundColor: value,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.1)", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" },
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HexColorPicker color={value} onChange={onChange} />

          <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#555" }}>
              {value}
            </Typography>

            <Tooltip title={copied ? "Copied!" : "Copy"} arrow>
              <IconButton onClick={handleCopy} sx={{ color: copied ? "green" : "gray" }}>
                {copied ? <CheckIcon /> : <ContentCopyIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
