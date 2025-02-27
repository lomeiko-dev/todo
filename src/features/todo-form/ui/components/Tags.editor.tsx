import { useState } from "react";
import classNames from "classnames";
import { Button, List, ListItem, Menu } from "@mui/material";
import { useTagsForm } from "../../model/lib/hooks/useTagsForm";
import { TagForm } from "./additional/TagForm";
import { TagItem } from "./additional/TagItem";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITag } from "shared/ui/boxes";
import TagIcon from "@mui/icons-material/Tag";

interface IProps extends IDefaultComponentsProps {
  valueTags: ITag[];
  onChange: (tags: ITag[]) => void;
}

export const TagsEditor: React.FC<IProps> = (props) => {
  const { onChange, valueTags, className, styleCSS } = props;

  const { onChangeColor, onCreateNewTag, onRemoveTag, setValue, tags, value } = useTagsForm({onChange, tags: valueTags});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classNames(className)} style={styleCSS}>
      <Button
        onClick={handleClick}
        size="small"
        sx={{ textTransform: "none" }}
        variant="outlined"
        endIcon={<TagIcon />}
      >
        tags
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List>
          {tags?.map((item) => (
            <TagItem tag={item} onRemove={onRemoveTag} onChange={onChangeColor} />
          ))}
          <ListItem>
            <TagForm value={value} onCreateNewTag={onCreateNewTag} setValue={setValue} />
          </ListItem>
        </List>
      </Menu>
    </div>
  );
};
