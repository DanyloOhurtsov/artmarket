import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en-US", "uk-UA"],
    defaultLocale: "uk-UA",
  },
};

export default withPayload(nextConfig);
