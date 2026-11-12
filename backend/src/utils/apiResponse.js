export function sendSuccess(
  res,
  statusCode,
  data,
  message,
  meta
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(meta ? { meta } : {}),
  });
}