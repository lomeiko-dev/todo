import classNames from "classnames";
import '../style.scss'
import { ListItemButton, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import CheckIcon from "@mui/icons-material/Check";
import FlagIcon from "@mui/icons-material/Flag";
import { typePriority } from "shared/ui/boxes";

interface IProps extends IDefaultComponentsProps {
  priority: typePriority;
  isSelected?: boolean;
  onSelect: () => void;
}

export const PriorityItem: React.FC<IProps> = (props) => {
  const { onSelect, className, isSelected, styleCSS, priority } = props;

  return (
    <ListItemButton
      className={classNames(className, "list-priority-item")}
      onClick={onSelect}
      sx={{ backgroundColor: isSelected ? "#33333310" : "", ...styleCSS }}
    >
      <FlagIcon color="primary"/>
      <Typography color="textPrimary" fontSize={"12px"}>
        {priority}
      </Typography>
      {isSelected ? <CheckIcon color="action" sx={{ width: "14px" }} /> : undefined}
    </ListItemButton>
  );
};
