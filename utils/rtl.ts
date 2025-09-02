// RTL languages
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi'] as const

export type RtlLanguage = typeof RTL_LANGUAGES[number]

/**
 * Check if a locale is RTL
 */
export const isRtl = (locale: string): boolean => {
  return RTL_LANGUAGES.includes(locale as RtlLanguage)
}

/**
 * Get text direction for a locale
 */
export const getTextDirection = (locale: string): 'ltr' | 'rtl' => {
  return isRtl(locale) ? 'rtl' : 'ltr'
}

/**
 * Get HTML dir attribute for a locale
 */
export const getHtmlDir = (locale: string): string => {
  return getTextDirection(locale)
}

/**
 * Get CSS direction property for a locale
 */
export const getCssDirection = (locale: string): string => {
  return getTextDirection(locale)
}

/**
 * Get Tailwind direction classes for a locale
 */
export const getTailwindDirection = (locale: string): string => {
  return isRtl(locale) ? 'rtl' : 'ltr'
}
