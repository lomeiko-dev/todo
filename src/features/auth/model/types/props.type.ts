import { FieldValues, SubmitHandler } from "react-hook-form";

export interface IAuthProps<T extends FieldValues> {
  onSuccessSubmitForm: SubmitHandler<T>;
  isFetching?: boolean;
  isMobile?: boolean;
  errorList?: string[];
}
