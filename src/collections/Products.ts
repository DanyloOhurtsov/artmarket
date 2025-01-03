import { formatSlug } from "@/lib/utils/format-slug";
import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Товар",
    plural: "Товари",
  },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["title", "slug", "images", "category"],
    useAsTitle: "title",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          label: "Назва товару",
          type: "text",
          required: true,
        },
        {
          name: "title_en",
          label: "Назва товару (англійською)",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "shortDescription",
      label: "Короткий опис товару",
      type: "text",
    },
    {
      name: "description",
      label: "Опис товару",
      type: "richText",
    },

    // SideBar
    {
      name: "isActive",
      label: "Активний",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "price",
      label: "Ціна товару",
      type: "number",
      defaultValue: 0,
      required: true,
      admin: {
        position: "sidebar",
      },
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
      name: "minOrder",
      label: "Мінімальне замовлення",
      type: "number",
      defaultValue: 1,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "stock",
      label: "Кількість товару на складі",
      type: "number",
      defaultValue: 0,
      required: true,
      admin: {
        position: "sidebar",
      },
    },

    // Images
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

    // Hidden fields
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ data, value }) => {
            if (data?.title) {
              return formatSlug(data.title_en || data.title);
            }
            return value;
          },
        ],
      },
    },
  ],
};
