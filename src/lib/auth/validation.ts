import type { AuthFieldErrors } from "./types";

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 72;
export const NAME_MAX_LENGTH = 80;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f-\u009f]/;

export function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function normalizeFullName(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function validateFullName(value: string) {
  const name = normalizeFullName(value);

  if (!name) {
    return "Enter your full name.";
  }

  if (CONTROL_CHARACTERS.test(name)) {
    return "Enter your name without control characters.";
  }

  if (name.length < 2) {
    return "Your name must be at least 2 characters.";
  }

  if (name.length > NAME_MAX_LENGTH) {
    return `Keep your name to ${NAME_MAX_LENGTH} characters or fewer.`;
  }

  return undefined;
}

export function validateEmail(value: string) {
  const email = normalizeEmail(value);

  if (!email) {
    return "Enter your email address.";
  }

  if (email.length > 254) {
    return "That email address is too long.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }

  return undefined;
}

export function validateNewPassword(value: string) {
  if (!value) {
    return "Choose a password.";
  }

  if (value.length < PASSWORD_MIN_LENGTH) {
    return `Use at least ${PASSWORD_MIN_LENGTH} characters.`;
  }

  if (value.length > PASSWORD_MAX_LENGTH) {
    return `Use no more than ${PASSWORD_MAX_LENGTH} characters.`;
  }

  return undefined;
}

function validateConfirmation(password: string, confirmPassword: string) {
  if (!confirmPassword) {
    return "Confirm your password.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return undefined;
}

export function validateSignUpFields(input: {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}): AuthFieldErrors {
  const errors: AuthFieldErrors = {};

  const fullNameError = validateFullName(input.fullName);
  const emailError = validateEmail(input.email);
  const passwordError = validateNewPassword(input.password);
  const confirmPasswordError = validateConfirmation(
    input.password,
    input.confirmPassword,
  );

  if (fullNameError) errors.fullName = fullNameError;
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
}

export function validateLoginFields(input: {
  email: string;
  password: string;
}): AuthFieldErrors {
  const errors: AuthFieldErrors = {};

  const emailError = validateEmail(input.email);
  if (emailError) errors.email = emailError;

  if (!input.password) {
    errors.password = "Enter your password.";
  }

  return errors;
}

export function validateResetFields(input: {
  password: string;
  confirmPassword: string;
}): AuthFieldErrors {
  const errors: AuthFieldErrors = {};

  const passwordError = validateNewPassword(input.password);
  const confirmPasswordError = validateConfirmation(
    input.password,
    input.confirmPassword,
  );

  if (passwordError) errors.password = passwordError;
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
}

export function safeRedirectPath(value: unknown, fallback = "/account") {
  if (typeof value !== "string") {
    return fallback;
  }

  const path = value.trim();

  if (
    !path ||
    path.length > 512 ||
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("\\") ||
    CONTROL_CHARACTERS.test(path)
  ) {
    return fallback;
  }

  try {
    const url = new URL(path, "https://speakup.invalid");
    if (url.origin !== "https://speakup.invalid") {
      return fallback;
    }

    return `${url.pathname}${url.search}`;
  } catch {
    return fallback;
  }
}
