import { useEffect, useState } from "react";
import classNames from "classnames";
import { Button, List, ListItem, Menu } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { useTagsForm } from "../../model/lib/hooks/useTagsForm";
import { ITagTodo, TagForm, TagItem } from "shared/ui/Boxes";
import TagIcon from "@mui/icons-material/Tag";

interface IProps extends IDefaultComponentsProps {
  valueTags: ITagTodo[];
  onChange: (tags: ITagTodo[]) => void;
}

export const TagsEditor: React.FC<IProps> = (props) => {
  const { onChange, valueTags, className, styleCSS } = props;

  const {onChangeColor, onCreateNewTag, onRemoveTag, setValue, tags, value, initialTags} = useTagsForm()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    initialTags(valueTags)
  }, [])

  useEffect(() => {
    onChange(tags);
  }, [tags])

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
            <TagItem tag={item} onRemove={onRemoveTag} onChange={onChangeColor}/>
          ))}
          <ListItem>
            <TagForm value={value} onCreateNewTag={onCreateNewTag} setValue={setValue}/>
          </ListItem>
        </List>
      </Menu>
    </div>
  );
};