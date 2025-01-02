import { FieldHook } from "payload";
import type { User } from "../../payload-types";

// ensure there is always a `user` role
// do not let non-admins change roles
export const protectRoles: FieldHook<{ id: string } & User> = ({
  data,
  req,
}) => {
  console.log(data);
  const isAdmin =
    req.user?.roles?.includes("admin") || data?.email === "danog312@gmail.com";

  if (!isAdmin) {
    return ["user"];
  }

  const userRoles = new Set(data?.roles || []);
  userRoles.add("user");
  return [...userRoles];
};
