export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string,
      RAPID_KEY: string
    }
  }
}