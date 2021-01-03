export const checkEmailFormat = (email: string): boolean => {
  return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g.test(email)
}
