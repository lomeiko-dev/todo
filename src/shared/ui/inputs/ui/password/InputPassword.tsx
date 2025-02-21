import { useState } from "react";
import { IDefaultComponentsProps } from "shared/types/props.types";

import FormControl, { FormControlProps } from "@mui/material/FormControl";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FormHelperText } from "@mui/material";

interface IProps extends OutlinedInputProps, IDefaultComponentsProps {
    formControlProps?: FormControlProps
    isConfirmPassword?: boolean
    helperText?: string
}

export const InputPassword: React.FC<IProps> = (props) => {
  const { className, styleCSS, formControlProps, isConfirmPassword = false, helperText, ...other } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl {...formControlProps} className={className} style={styleCSS} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{isConfirmPassword ? `confirm` : ''} password</InputLabel>
      <OutlinedInput
        {...other}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "hide the password" : "display the password"}
              onClick={handleToggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
        {helperText && <FormHelperText error={other.error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
