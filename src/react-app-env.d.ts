/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test' | 'qa'
    readonly PUBLIC_URL: string
  }
}
declare namespace Process {
  export interface ProcessEnv {
    [key: string]: string | undefined
  }
}
