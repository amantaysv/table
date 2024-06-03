export const makeArray = (arrayLength: number) => {
  return new Array(arrayLength).fill(null).map((_, id) => id + 1)
}
