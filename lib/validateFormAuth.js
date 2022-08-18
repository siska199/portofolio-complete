export const dataFormAuth = [
  {
    name: "username",
    type: "text",
    pattern: "^[a-z0-9]{3,10}$",
    error:
      "Username should be 3-10 characters and should't contain uppercase letter",
    value: "",
  },
  {
    name: "email",
    type: "email",
    pattern: "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
    error: "Please input valid email address",
    value: "",
  },
  {
    name: "password",
    type: "password",
    pattern:
      "^(?=.*[a-z])(?!.* )(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})",
    error:
      "Password should be 8-20 characters and includes at least contain 1 lowercase, 1 uppercase, 1 numeric, and 1 special character",
    value: "",
  },
];
