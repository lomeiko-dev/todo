export const idGenerator = () => {
  return performance.now().toString(36).replace(".", "");
};
