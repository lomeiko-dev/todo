import style from "./styles.module.scss";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputPassword } from "shared/ui/inputs";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import { emailRegex, passwordRegex } from "../config/regex";
import { typeRegisterBody } from "../model";
import { IAuthProps } from "../model/types/props.type";
import { ErrorWrapper } from "./wrapper/Error.wrapper";

interface IProps extends IDefaultComponentsProps, IAuthProps<typeRegisterBody> {}

const RegistrationForm: React.FC<IProps> = (props) => {
  const { className, styleCSS, onSuccessSubmitForm, isMobile = false, isFetching = false, errorList } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IFormSignUp>();

  const onSubmit: SubmitHandler<typeRegisterBody> = async (data, event) => {
    await onSuccessSubmitForm(data, event);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(style.form, isMobile && style.form_small, className)}
      style={styleCSS}
    >
      <ErrorWrapper errorList={errorList}>
        <TextField
          {...register("name", {
            required: { value: true, message: "name field is required" },
            maxLength: { value: 20, message: "name field is max values 20" },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          type="text"
          id="outlined-basic"
          label="name"
          variant="outlined"
          fullWidth
          size={isMobile ? "small" : "medium"}
        />

        <TextField
          {...register("email", {
            required: { value: true, message: "email field is required" },
            pattern: { value: emailRegex, message: "email is invalidate" },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          type="email"
          id="outlined-basic"
          label="email"
          variant="outlined"
          fullWidth
          size={isMobile ? "small" : "medium"}
        />

        <div className={style.password_block}>
          <InputPassword
            {...register("password", {
              required: { value: true, message: "password field is required" },
              pattern: { value: passwordRegex, message: "Password must contain at least one letter and one number" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            formControlProps={{ fullWidth: true, size: isMobile ? "small" : "medium" }}
            size={isMobile ? "small" : "medium"}
          />

          <InputPassword
            {...register("confirmPassword", {
              required: { value: true, message: "repeat the password" },
              validate: (value) => value === watch("password") || "passwords don't match",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            formControlProps={{ fullWidth: true, size: isMobile ? "small" : "medium" }}
            isConfirmPassword
            size={isMobile ? "small" : "medium"}
          />
        </div>

        <FormControlLabel
          control={<Checkbox defaultChecked size={isMobile ? "small" : "medium"} {...register("rememberMe")} />}
          label="remember me"
        />
        <Button
          size={isMobile ? "small" : "medium"}
          loading={isFetching}
          disabled={isFetching}
          type="submit"
          fullWidth
          variant="contained"
        >
          Sign up
        </Button>
      </ErrorWrapper>
    </form>
  );
};

export default RegistrationForm;