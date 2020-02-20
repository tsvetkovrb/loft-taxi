export const isObjectEmpty = (obj: object) => {
  return Object.values(obj).every((value: string) => value.length === 0);
};
