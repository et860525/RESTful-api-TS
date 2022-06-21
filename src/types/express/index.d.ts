export {};

declare global {
  namespace Express {
    interface Request {
      post: any
    }
    interface Response {
      post: any
    }
  }
}