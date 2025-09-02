import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { isRtl, getTextDirection, getTailwindDirection } from '../utils/rtl'

export const useRtl = () => {
  const { i18n } = useTranslation()
  
  const rtl = useMemo(() => {
    const currentLocale = i18n.language
    return {
      isRtl: isRtl(currentLocale),
      direction: getTextDirection(currentLocale),
      tailwindDirection: getTailwindDirection(currentLocale),
      locale: currentLocale,
    }
  }, [i18n.language])

  return rtl
}

export default useRtl
