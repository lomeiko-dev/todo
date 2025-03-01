import classNames from "classnames";
import "./style.scss";
import { Button, Stack } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps extends IDefaultComponentsProps {
  onRemove: () => void;
  onEdit: () => void;
}

export const BaseActions: React.FC<IProps> = (props) => {
  const { onEdit, onRemove, className, styleCSS } = props;

  const handleRemove = (e: any) => {
    e.stopPropagation()
    onRemove()
  }

  const handleEdit = (e: any) => {
    e.stopPropagation()
    onEdit()
  }

  return (
    <Stack className={classNames(className, "stack-todo-menu")} sx={styleCSS}>
      <Button onClick={handleEdit} className="fab" color="primary">
        <EditIcon className="icon" />
      </Button>
      <Button onClick={handleRemove} className="fab" color="error" size="small">
        <DeleteIcon className="icon" />
      </Button>
    </Stack>
  );
};
