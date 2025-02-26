import classNames from "classnames";
import { Stack, Typography } from "@mui/material";
import { IDefaultComponentsProps } from "shared/types/props.types";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface IProps extends IDefaultComponentsProps {
  date: string;
}

export const DateBox: React.FC<IProps> = (props) => {
  const { date, className, styleCSS } = props;

  return (
    <Stack className={classNames(className)} style={styleCSS} display="flex" flexDirection="row" alignItems="center">
      <CalendarMonthIcon color="secondary" sx={{ width: "16px" }} />
      <Typography lineHeight={0} color="secondary" fontSize={12} marginLeft={"10px"}>
        {date}
      </Typography>
    </Stack>
  );
};
