export const ACCESS_TOKEN_EXPIRE_TIME = new Date(
  new Date().getTime() + 60 * 60 * 1000
);
export const REFRESH_TOKEN_EXPIRE_TIME_SHORT = new Date(
  new Date().getTime() + 24 * 60 * 60 * 1000
);
export const REFRESH_TOKEN_EXPIRE_TIME_LONG = new Date(
  new Date().getTime() + 7 * 24 * 60 * 60 * 1000
);
