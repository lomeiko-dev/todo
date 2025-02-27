import classNames from "classnames";
import { IconButton, ListItem, Typography } from "@mui/material";
import { ColorPicker } from "shared/ui/pickers";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITag } from "shared/ui/boxes";
import CloseIcon from "@mui/icons-material/Close";

interface IProps extends IDefaultComponentsProps {
  tag: ITag;
  onChange: (color: string, id: string) => void;
  onRemove: (id: string) => void;
}

export const TagItem: React.FC<IProps> = (props) => {
  const { onChange, onRemove, tag, className, styleCSS } = props;

  return (
    <ListItem className={classNames(className, 'tag-editor-item')} sx={styleCSS}>
      <ColorPicker value={tag.color} onChange={(color) => onChange(color, tag.id)} />
      <Typography className="text">{tag.title}</Typography>
      <IconButton onClick={() => onRemove(tag.id)} className="button">
        <CloseIcon color="success" className="icon" />
      </IconButton>
    </ListItem>
  );
};
