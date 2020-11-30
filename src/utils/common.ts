export const isClient = typeof window !== "undefined";
export const isServer = typeof window === "undefined";

export const isAnalyzing = process.env.ANALYZE === "true";
export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";
