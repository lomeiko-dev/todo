import classNames from "classnames";
import "./style.scss";
import { Chip, List, ListItem } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITag, TagBox } from "shared/ui/boxes";
import { useState } from "react";

const MAX_TAGS = 8;

interface IProps extends IDefaultComponentsProps {
  tags: ITag[];
}

export const TagList: React.FC<IProps> = (props) => {
  const { tags, className, styleCSS } = props;

  const [show, setShow] = useState(false);

  const handleShowAll = () => {
    setShow(true);
  };

  return (
    <List className={classNames(className, "tag_list")} style={styleCSS}>
      {tags.slice(0, show ? tags.length : MAX_TAGS).map((item, index) => (
        <ListItem className={"tag_item"} key={index}>
          <TagBox tag={item} />
        </ListItem>
      ))}
      {tags.length > MAX_TAGS && !show && <Chip onClick={handleShowAll} label="..." size="small" />}
    </List>
  );
};
