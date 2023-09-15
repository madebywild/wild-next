export const IS_CLIENT = typeof window !== "undefined";
export const IS_SERVER = typeof window === "undefined";

export const IS_ANALYZING = process.env.ANALYZE === "true";
export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PROD = process.env.NODE_ENV === "production";

export const BASE_URLS = [process.env.NEXT_PUBLIC_SITE_URL] as const;
