import classNames from "classnames";
import "./style.scss";
import { Stack, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { typePriority } from "../../model";
import FlagIcon from "@mui/icons-material/Flag";

interface IProps extends IDefaultComponentsProps {
  priority: typePriority;
}

export const PriorityBox: React.FC<IProps> = (props) => {
  const { priority, className, styleCSS } = props;

  return (
    <Stack className={classNames(className, "priority-stack")} style={styleCSS}>
      <FlagIcon className="icon" color="primary" />
      <Typography color="primary" className="text">
        {priority}
      </Typography>
    </Stack>
  );
};
