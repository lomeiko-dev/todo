import { Stack, Typography } from "@mui/material";
import classNames from "classnames";
import { typePriority } from "../../model/types/types";
import { IDefaultComponentsProps } from "shared/types/props.types";
import FlagIcon from '@mui/icons-material/Flag';

interface IProps extends IDefaultComponentsProps {
  priority: typePriority;
}

export const PriorityBox: React.FC<IProps> = (props) => {
  const { priority, className, styleCSS } = props;

  return (
    <Stack className={classNames(className)} style={styleCSS} display="flex" flexDirection="row" alignItems="center">
      <FlagIcon sx={{ width: "16px" }} color="primary" />
      <Typography color="primary" fontSize={12}>
        {priority}
      </Typography>
    </Stack>
  );
};
