import type { CollectionConfig } from "payload";

export const media: CollectionConfig = {
  slug: "media",
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
