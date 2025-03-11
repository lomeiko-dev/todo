import classNames from "classnames";
import "./style.scss";
import { List, ListItem } from "@mui/material";
import { TagList } from "./TagList";
import { DateBox, PriorityBox } from "shared/ui/boxes";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITodo } from "../../model/types/types";


interface IProps extends IDefaultComponentsProps, Pick<ITodo, "deadline" | "priority" | "tags"> {
  isFullTags?: boolean;
}

export const ListProperties: React.FC<IProps> = (props) => {
  const { deadline, priority, tags, className, styleCSS, isFullTags } = props;

  return (
    <List className={classNames(className, "list-properties")} sx={styleCSS}>
      <ListItem className="properties-item">
        <DateBox date={deadline !== undefined ? new Date(deadline).toLocaleDateString("ru-RU") : 'none'} />
      </ListItem>
      <ListItem className="properties-item">
        <PriorityBox priority={priority || 'none'} />
      </ListItem>
      <ListItem className="properties-item properties-item-tag-list">
        <TagList maxTags={isFullTags ? tags?.length || 0 : 8} tags={tags || []} />
      </ListItem>
    </List>
  );
};
