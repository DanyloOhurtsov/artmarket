import { formatSlug } from "@/lib/utils/format-slug";
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Категорія",
    plural: "Категорії",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: 'row',
      fields:[
        {
          name: "title",
          label: "Назва категорії",
          type: "text",
          required: true,
        },
        {
          name: "title_en",
          label: "Назва категорії (англійською)",
          type: "text",
          required: true,
        },

      ]
    },
    {
      name: "description",
      label: "Опис категорії",
      type: "richText",
    },
    {
      name: "products",
      label: "Товари",
      type: "join",
      collection: "products",
      on: "category",
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
