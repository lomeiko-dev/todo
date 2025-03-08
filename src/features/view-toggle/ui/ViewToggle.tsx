import classNames from "classnames";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";

type typeView = "list" | "board";

interface IProps extends IDefaultComponentsProps {
  onAction: (type: typeView) => void;
  alignment: typeView;
}

export const ViewToggle: React.FC<IProps> = (props) => {
  const { styleCSS, className, onAction, alignment } = props;

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newAlignment: typeView) => {
    onAction(newAlignment);
  };

  return (
    <ToggleButtonGroup
      size="small"
      className={classNames(className)}
      sx={styleCSS}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value={"list"} aria-label="left aligned">
        <ListIcon />
      </ToggleButton>
      <ToggleButton value="board" aria-label="right aligned">
        <DashboardIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
