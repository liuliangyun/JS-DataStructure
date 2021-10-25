export const defaultEquals = (a, b) => {
  return a === b
}

export const defaultCompares = (a, b) => {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}