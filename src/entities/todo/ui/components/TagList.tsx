import classNames from "classnames";
import "./style.scss";
import { Chip, List, ListItem } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITag, TagBox } from "shared/ui/boxes";

interface IProps extends IDefaultComponentsProps {
  tags: ITag[];
  maxTags: number;
}

export const TagList: React.FC<IProps> = (props) => {
  const { tags, className, styleCSS, maxTags } = props;

  return (
    <List className={classNames(className, "tag_list")} style={styleCSS}>
      {tags.slice(0,  maxTags).map((item, index) => (
        <ListItem className={"tag_item"} key={index}>
          <TagBox tag={item} />
        </ListItem>
      ))}
      {tags.length > maxTags && <Chip label="..." size="small" />}
    </List>
  );
};
