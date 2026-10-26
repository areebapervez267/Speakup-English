export type AuthField =
  | "fullName"
  | "email"
  | "password"
  | "confirmPassword";

export type AuthFieldErrors = Partial<Record<AuthField, string>>;

export type AuthFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: AuthFieldErrors;
  values?: {
    fullName?: string;
    email?: string;
  };
};

export const initialAuthFormState: AuthFormState = { status: "idle" };

export type SignOutState = "idle" | "success" | "error";
