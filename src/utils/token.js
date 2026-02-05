export const ACCESS_TOKEN_EXPIRY = 60 * 1000; // 1 min
export const REFRESH_TOKEN_EXPIRY = 5 * 60 * 1000; // 5 min

export const generateToken = (prefix, expiry) => ({
  value: `${prefix}-${Math.random().toString(36).slice(2)}`,
  expiresAt: Date.now() + expiry,
});

export const isValid = (token) => token && token.expiresAt > Date.now();
