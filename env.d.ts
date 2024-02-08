declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      USE_STATIC_EXPORT: string;
    }
  }
}

export {};
