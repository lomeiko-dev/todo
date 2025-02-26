import { useState } from "react";
import { Button, Menu } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker, StaticDatePickerProps } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface IProps extends StaticDatePickerProps<Dayjs>{}

export const DateCalendar: React.FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        size="small"
        sx={{ textTransform: "none" }}
        variant="outlined"
        endIcon={<CalendarMonthIcon />}
      >
        deadline
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker {...props} defaultValue={dayjs(new Date())} />
        </LocalizationProvider>
      </Menu>
    </div>
  );
};
