let ACCESS_TOKEN = ''
let REFRESH_TOKEN = ''

export const getAccessToken = (): string => ACCESS_TOKEN
export const getRefreshToken = (): string => REFRESH_TOKEN
export const setAccessToken = (token: string): void => {
  ACCESS_TOKEN = token
}
export const setRefreshToken = (token: string): void => {
  REFRESH_TOKEN = token
}
