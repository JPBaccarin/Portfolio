import type { GlobalConfig } from "payload";

export const siteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Navegação",
          fields: [
            {
              name: "nav",
              type: "group",
              fields: [
                { name: "projects", type: "text", localized: true },
                { name: "about", type: "text", localized: true },
                { name: "contact", type: "text", localized: true },
              ],
            },
          ],
        },
        {
          label: "Hero",
          fields: [
            {
              name: "hero",
              type: "group",
              fields: [
                { name: "description", type: "textarea", localized: true },
                { name: "cta", type: "text", localized: true },
                { name: "resumeDownload", type: "text", localized: true },
                { name: "resumeFile", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        {
          label: "Sobre",
          fields: [
            {
              name: "about",
              type: "group",
              fields: [
                { name: "label", type: "text", localized: true },
                { name: "title", type: "text", localized: true },
                { name: "description1", type: "textarea", localized: true },
                { name: "description2", type: "textarea", localized: true },
              ],
            },
          ],
        },
        {
          label: "Trabalhos",
          fields: [
            {
              name: "projectsLabel",
              type: "group",
              fields: [
                { name: "label", type: "text", localized: true },
                { name: "title", type: "text", localized: true },
              ],
            },
          ],
        },
        {
          label: "Footer",
          fields: [
            {
              name: "footer",
              type: "group",
              fields: [
                { name: "label", type: "text", localized: true },
                { name: "title", type: "text", localized: true },
                { name: "cta", type: "text", localized: true },
                { name: "socialLabel", type: "text", localized: true },
                {
                  name: "contactDialog",
                  type: "group",
                  fields: [
                    { name: "title", type: "text", localized: true },
                    { name: "whatsapp", type: "text", localized: true },
                    { name: "email", type: "text", localized: true },
                    { name: "linkedin", type: "text", localized: true },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
