import style from "./styles.module.scss";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputPassword } from "shared/ui/inputs";
import { IDefaultComponentsProps } from "shared/types/props.types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import { typeLoginBody } from "../model/api/types";
import { IAuthProps } from "../model/types/props.type";
import { ErrorWrapper } from "./wrapper/Error.wrapper";

interface IProps extends IDefaultComponentsProps, IAuthProps<typeLoginBody> {}

const LoginForm: React.FC<IProps> = (props) => {
  const { className, styleCSS, onSuccessSubmitForm, isMobile = false, isFetching = false, errorList } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormSignUp>();

  const onSubmit: SubmitHandler<typeLoginBody> = async (data, event) => {
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
          {...register("email", {
            required: { value: true, message: "name field is required" },
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
        <InputPassword
          {...register("password", {
            required: { value: true, message: "password field is required" },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          formControlProps={{ fullWidth: true, size: isMobile ? "small" : "medium" }}
          size={isMobile ? "small" : "medium"}
        />

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
          Log in
        </Button>
      </ErrorWrapper>
    </form>
  );
};

export default LoginForm;
