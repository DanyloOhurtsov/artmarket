import type { CollectionConfig, PayloadRequest } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["title", "slug", "images", "category"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Назва товару",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Назва товару в URL",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Опис товару",
      type: "richText",
    },
    {
      name: "price",
      label: "Ціна товару",
      type: "number",
      defaultValue: 0,
      required: true,
    },
    {
      name: "category",
      label: "Категорія товару",
      type: "relationship",
      relationTo: "categories",
      required: true,
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "images",
      label: "Зображення товару",
      type: "array",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "image",
          label: "Зображення",
          relationTo: "media",
          type: "upload",
        },
      ],
    },
  ],
};
