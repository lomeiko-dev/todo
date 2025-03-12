import classNames from "classnames";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import { setTypeView, typeView } from "../model";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { typeViewTodoSelector } from "../model/slice/view-todo.selectors";

interface IProps extends IDefaultComponentsProps {}

export const ViewToggle: React.FC<IProps> = (props) => {
  const { styleCSS, className } = props;

  const dispatch = useAppDispatch()
  const type = useAppSelector(typeViewTodoSelector)

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newType: typeView) => {
    dispatch(setTypeView(newType));
  };

  return (
    <ToggleButtonGroup
      size="small"
      className={classNames(className)}
      sx={styleCSS}
      value={type}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="list" aria-label="left aligned">
        <ListIcon />
      </ToggleButton>
      <ToggleButton value="board" aria-label="right aligned">
        <DashboardIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
