import { useState } from "react";
import classNames from "classnames";
import { Button, List, Menu } from "@mui/material";
import { prioritySelections } from "../../model/selections/priority.selections";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { typePriority } from "shared/ui/boxes";
import { PriorityItem } from "./additional/PriorityItem";
import FlagIcon from "@mui/icons-material/Flag";

interface IProps extends IDefaultComponentsProps {
  prioritySelect: typePriority;
  onSelect: (priority: typePriority) => void;
}

export const PriorityEditor: React.FC<IProps> = (props) => {
  const { onSelect, prioritySelect, className, styleCSS } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(className)} style={styleCSS}>
      <Button
        onClick={handleClick}
        size="small"
        sx={{ textTransform: "none" }}
        variant="outlined"
        endIcon={<FlagIcon />}
      >
        priority
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List>
          {prioritySelections.map((item) => (
            <PriorityItem isSelected={item === prioritySelect} priority={item} onSelect={() => onSelect(item)} />
          ))}
        </List>
      </Menu>
    </div>
  );
};
