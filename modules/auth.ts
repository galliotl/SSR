export const register = (): Promise<void> => {
  return new Promise(res => setTimeout(() => res(), 1000))
}
