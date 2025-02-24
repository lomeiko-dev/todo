import { Box, Chip, List, ListItem } from "@mui/material";
import { ITagTodo } from "../../model/types/types";
import { IDefaultComponentsProps } from "shared/types/props.types";
import "../style.scss";
import classNames from "classnames";

interface IProps extends IDefaultComponentsProps {
  tags: ITagTodo[];
}

export const TagList: React.FC<IProps> = (props) => {
  const { tags, className, styleCSS } = props;

  return (
    <List className={classNames(className, "tag_list")} style={styleCSS}>
      {tags.map((item, index) => (
        <ListItem className={"tag_item"} key={index}>
          <Chip
            className={"tag_chip"}
            avatar={<Box borderRadius="50%" bgcolor={item.color} />}
            size="small"
            label={item.title}
          />
        </ListItem>
      ))}
    </List>
  );
};
