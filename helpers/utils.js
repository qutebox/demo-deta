// eslint-disable-next-line import/prefer-default-export
export function asset(path) {
  const { app: config } = useRuntimeConfig();

  return [
    config.cdnURL,
    path,
  ].filter((d) => d).join('').trim();
}
