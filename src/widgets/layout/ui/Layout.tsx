import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { Sidebar } from "./components/Sidebar";
import { Box, Container, IconButton } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import DehazeIcon from "@mui/icons-material/Dehaze";

interface IProps extends IDefaultComponentsProps {
  children: React.ReactNode;
}

const drawerWidth = 320;

export const Layout: React.FC<IProps> = (props) => {
  const { children, className, styleCSS } = props;

  const [active, setActive] = useState(true);

  const toggleDrawer = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <div className={classNames(className)} style={styleCSS}>
      <Sidebar isOpen={active} onClose={toggleDrawer} drawerWidthPx={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: active ? `${drawerWidth}px` : 0,
          transition: ".2s",
        }}
      >
        <IconButton sx={{ position: "absolute", display: active ? "none" : "block" }} onClick={toggleDrawer}>
          <DehazeIcon />
        </IconButton>

        <Container maxWidth={active ? 'lg' : 'md'}>{children}</Container>
      </Box>
    </div>
  );
};
