export function makeObj<T>(arr: number[], value: T) {
  return arr.reduce((acc, rec) => {
    return {
      ...acc,
      [rec]: value,
    }
  }, {})
}
