import classNames from "classnames";
import "./style.scss";
import { Fab, Stack } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import ArchiveIcon from "@mui/icons-material/Archive";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps extends IDefaultComponentsProps {
  onRemove: () => void;
  onEdit: () => void;
  onArchive: () => void;
}

export const TodoMenu: React.FC<IProps> = (props) => {
  const { onArchive, onEdit, onRemove, className, styleCSS } = props;

  return (
    <Stack className={classNames(className, "stack-todo-menu")} sx={styleCSS}>
      <Fab onClick={onEdit} className="fab" color="primary">
        <EditIcon className="icon" />
      </Fab>
      <Fab onClick={onArchive} className="fab" color="warning" size="small">
        <ArchiveIcon className="icon" />
      </Fab>
      <Fab onClick={onRemove} className="fab" color="error" size="small">
        <DeleteIcon className="icon" />
      </Fab>
    </Stack>
  );
};
