export const groupArrayElements = <T>(elements: Array<T>, targetLength: number) => {
  const length = Math.max(targetLength, 0);

  const chunkLength = Math.ceil(elements.length / length);

  return Array(length)
    .fill([])
    .map((_, i) => {
      const offset = i * chunkLength;
      return elements.slice(offset, offset + chunkLength);
    })
    .filter((chunk) => chunk.length > 0);
};
