import classNames from "classnames";
import './style.scss'
import { Box, IconButton, InputBase } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import AddIcon from "@mui/icons-material/Add";

interface IProps extends IDefaultComponentsProps {
  value: string;
  setValue: (value: string) => void;
  onCreateNewTag: () => void;
}

export const TagForm: React.FC<IProps> = (props) => {
  const { onCreateNewTag, setValue, value, className, styleCSS } = props;

  return (
    <Box className={classNames(className)} sx={styleCSS} borderRadius={1} border={"1px solid #33333320"}>
      <InputBase
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="small"
        className="tag-input"
        placeholder="tag name"
        inputProps={{ "aria-label": "tag name" }}
      />
      <IconButton onClick={onCreateNewTag} className={"tag-add-button"}>
        <AddIcon sx={{ width: "14px" }} />
      </IconButton>
    </Box>
  );
};
