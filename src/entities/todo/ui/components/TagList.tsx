import {List, ListItem } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import "../style.scss";
import classNames from "classnames";
import { ITagTodo, TagBox } from "shared/ui/Boxes";

interface IProps extends IDefaultComponentsProps {
  tags: ITagTodo[];
}

export const TagList: React.FC<IProps> = (props) => {
  const { tags, className, styleCSS } = props;

  return (
    <List className={classNames(className, "tag_list")} style={styleCSS}>
      {tags.map((item, index) => (
        <ListItem className={"tag_item"} key={index}>
          <TagBox tag={item}/>
        </ListItem>
      ))}
    </List>
  );
};
