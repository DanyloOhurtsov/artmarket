import type { CollectionConfig } from "payload";
import { protectRoles } from "./hooks/protect-roles";
import adminsAndUser from "./access/admins-and-users";
import { anyone } from "./access/anyone";
import { admins } from "./access/admins";
import { checkRole } from "./access/check-role";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Користувач",
    plural: "Користувачі",
  },
  admin: {
    useAsTitle: "email",
  },
  auth: {
    tokenExpiration: 28800,
    cookies: {
      sameSite: "None",
      secure: true,
      domain: process.env.COOKIE_DOMAIN,
    },
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(["admin"], user!),
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true,
      hooks: {
        beforeChange: [protectRoles],
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};
