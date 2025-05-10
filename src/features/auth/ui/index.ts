import { lazy } from "react";

export const RegistrationFormLazy = lazy(async () => await import("./Registration.form"));

export const LoginFormLazy = lazy(async () => await import("./Login.form"));
