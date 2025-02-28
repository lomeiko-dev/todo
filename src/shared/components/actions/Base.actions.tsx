import classNames from "classnames";
import "./style.scss";
import { Button, Fab, Stack } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps extends IDefaultComponentsProps {
  onRemove: () => void;
  onEdit: () => void;
}

export const BaseActions: React.FC<IProps> = (props) => {
  const { onEdit, onRemove, className, styleCSS } = props;

  return (
    <Stack className={classNames(className, "stack-todo-menu")} sx={styleCSS}>
      <Button onClick={onEdit} className="fab" color="primary">
        <EditIcon className="icon" />
      </Button>
      <Button onClick={onRemove} className="fab" color="error" size="small">
        <DeleteIcon className="icon" />
      </Button>
    </Stack>
  );
};
