import classNames from "classnames";
import "../style.scss";
import { List, ListItem } from "@mui/material";
import { TagList } from "./TagList";
import { DateBox, PriorityBox } from "shared/ui/Boxes";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITodo } from "../../model/types/types";

interface IProps extends IDefaultComponentsProps, Pick<ITodo, "deadline" | "priority" | "tags"> {}

export const ListProperties: React.FC<IProps> = (props) => {
  const { deadline, priority, tags, className, styleCSS } = props;
  return (
    <List className={classNames(className, "list-properties")} sx={styleCSS}>
      <ListItem className="properties-item">
        <DateBox date={deadline !== undefined ? deadline.format("DD.MM.YYYY") : 'none'} />
      </ListItem>
      <ListItem className="properties-item">
        <PriorityBox priority={priority || 'none'} />
      </ListItem>
      <ListItem className="properties-item">
        <TagList tags={tags || []} />
      </ListItem>
    </List>
  );
};
