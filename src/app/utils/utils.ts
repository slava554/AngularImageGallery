export const getRandomImageId = (): string => {
  return `i${Math.floor(Math.random() * 20000)}`;
}

export const getSrcById = (id: string): string => {
  return `https://picsum.photos/seed/${id}/200/300`;
}
