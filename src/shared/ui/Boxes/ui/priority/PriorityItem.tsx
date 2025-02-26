import { ListItemButton, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import CheckIcon from "@mui/icons-material/Check";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { typePriority } from "../../model";
import classNames from "classnames";

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
      <FlagIcon color="primary" className="icon" />
      <Typography color="textPrimary" fontSize={"12px"}>
        {priority}
      </Typography>
      {isSelected || <CheckIcon color="action" sx={{ width: "14px" }} />}
    </ListItemButton>
  );
};
