declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DIST_DIR?: string;
    }
  }
}

export {};
