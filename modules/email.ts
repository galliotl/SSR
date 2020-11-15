export const checkEmail = (email: string): Promise<boolean> => {
  return new Promise(res => setTimeout(() => res(true), 1000))
}
