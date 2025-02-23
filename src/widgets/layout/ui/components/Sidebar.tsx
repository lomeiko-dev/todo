import {
  Drawer,
  Divider,
  Box,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import classNames from "classnames";
import { IDefaultComponentsProps } from "shared/types/props.types";

import style from "./styles.module.scss";
import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import AssignmentIcon from "@mui/icons-material/Assignment";

interface IProps extends IDefaultComponentsProps {
  drawerWidthPx: number;
  isOpen: boolean;
  onClose: () => void
}

const projects = ["Project Alpha", "Project Beta", "Client Dashboard", "Internal Tool"];

export const Sidebar: React.FC<IProps> = (props) => {
  const { drawerWidthPx, className, styleCSS, isOpen, onClose } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      className={classNames(className, style.drawer)}
      style={styleCSS}
      sx={{
        width: drawerWidthPx,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidthPx,
          padding: "10px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)", // Мягкая тень справа
          transition: "all 0.3s ease-in-out",
        },
      }}
      anchor="left"
      variant="persistent"
      open={isOpen}
    >
      <Box display="flex" alignItems="center" p={2} sx={{ gap: 2 }}>
        <Avatar sx={{ width: 50, height: 50 }}>U</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={handleMenuOpen}>
            <Typography>John Doe</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            ID: 123456
          </Typography>
        </Box>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton onClick={onClose}>
          <ArrowBackIosIcon/>
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Открыть профиль</MenuItem>
          <MenuItem onClick={handleMenuClose}>Настройки</MenuItem>
          <MenuItem onClick={handleMenuClose}>Help</MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose} sx={{ color: "red" }}>
            Выйти
          </MenuItem>
        </Menu>
      </Box>

      <Divider />

      <Box p={2} display="flex" flexDirection="column" gap={2}>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button startIcon={<AddIcon />} variant="text" color="primary" fullWidth>
          Create Task
        </Button>

        <Box display="flex" flexDirection="column" gap={1}>
          <Button
            fullWidth
            startIcon={<ListIcon />}
            variant="text"
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: "14px",
            }}
          >
            Todo
          </Button>

          <Button
            fullWidth
            startIcon={<AssignmentIcon />}
            variant="text"
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: "14px",
            }}
          >
            My Tasks
          </Button>
        </Box>
      </Box>
      <Divider>
        <Typography color="textSecondary">Projects</Typography>
      </Divider>
      <Box>
        <List>
          {projects.map((project, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={project} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button startIcon={<AddIcon />} variant="contained" color="primary" fullWidth>
          Create project
        </Button>
      </Box>
    </Drawer>
  );
};
