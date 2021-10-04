import { sideBarLinks } from 'constant'

/**
 * This function is used in sidebar to map the item with their index
 * @param key -- it is the pathname getting from useLocation and onClick
 * @returns -- it returns the number(index)
 */
export const sideBarLinkIndex = (key: string, index: number): any => {
  if (key && index === 0) {
    return sideBarLinks[index].findIndex((value: any) => value.route === key)
  } else if (key && index === 1) {
    const result = sideBarLinks[index]
    let response = findAuthTab(key, result)
    return typeof response === 'undefined'
      ? { childIndex: 0, parentIndex: 0 }
      : findAuthTab(key, result)
  } else {
    return 0
  }
}
export const findAuthTab = (key: string, arr: Array<any>): any => {
  const arrLength = arr.length
  let parentIndex = 0
  let childIndex = 0
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arr[i]['submenu'].length; j++) {
      if (arr[i]['submenu'][j].route === key) {
        childIndex = j
        parentIndex = i
        return { childIndex, parentIndex }
      }
    }
  }
}

export async function getIdToken() {
  const userDetails = localStorage.getItem('userDetails')
  return userDetails ? JSON.parse(userDetails).token : null
}

export const isPublicRoute = (): boolean | undefined => {
  const location = new URL(window.location.href)
  const { pathname } = location
  const istoken = localStorage.getItem('userDetails')
  if (istoken) {
    const isExistRoute = sideBarLinks[0].filter(
      (v: any) => v.route === pathname,
    )
    if (isExistRoute && isExistRoute.length) {
      return false
    }
  } else {
    return true
  }
}

/**
 * Phone Number RegExp
 */
export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const localDate = (date: string | number) => {
  const isoDateTime = new Date(date)
  return (
    isoDateTime.toLocaleDateString() + ', ' + isoDateTime.toLocaleTimeString()
  )
}

export const isEnvHasUrl = (): boolean => {
  const url = process.env.REACT_APP_API_ENDPOINT
  if (!url) return false
  else return true
}
