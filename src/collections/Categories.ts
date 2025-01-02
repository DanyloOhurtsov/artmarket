import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Назва категорії",
      type: "text",
      required: true,
    },
    {
      name: "products",
      label: "Товари",
      type: "join",
      collection: "products",
      on: "category",
    },
  ],
};
