declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DIST_DIR?: string;
      NEXT_PUBLIC_SITE_URL: string;
    }
  }
}

export {};
