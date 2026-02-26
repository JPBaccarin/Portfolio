import sharp from "sharp";
import { lexicalEditor, EXPERIMENTAL_TableFeature } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import path from "path";
import { fileURLToPath } from "url";

import { users } from "./collections/users";
import { media } from "./collections/media";
import { projects } from "./collections/projects";
import { siteSettings } from "./globals/site-settings";

import { s3Storage } from "@payloadcms/storage-s3";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, EXPERIMENTAL_TableFeature()],
  }),
  collections: [users, media, projects],
  globals: [siteSettings],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: "media",
        },
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION || "",
        endpoint: process.env.S3_ENDPOINT || "",
      },
    }),
  ],
  localization: {
    locales: [
      {
        label: "Português",
        code: "pt",
      },
      {
        label: "English",
        code: "en",
      },
    ],
    defaultLocale: "pt",
    fallback: true,
  },
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
