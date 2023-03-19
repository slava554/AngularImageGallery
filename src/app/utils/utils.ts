export const getRandomImageId = (): string => {
  return `i${Math.floor(Math.random() * 20)}`;
}