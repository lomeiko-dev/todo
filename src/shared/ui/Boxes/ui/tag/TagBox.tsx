import classNames from "classnames";
import "./style.scss";
import { Box, Chip } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { ITag } from "../../model";

interface IProps extends IDefaultComponentsProps {
  tag: ITag;
}

export const TagBox: React.FC<IProps> = (props) => {
  const { tag, className, styleCSS } = props;

  return (
    <Chip
      className={classNames(className, "tag-chip")}
      sx={styleCSS}
      avatar={<Box className='tag-color' bgcolor={tag.color} />}
      size="small"
      label={tag.title}
    />
  );
};
