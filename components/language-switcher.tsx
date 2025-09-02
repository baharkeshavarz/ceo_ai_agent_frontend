import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRtl } from '../hooks/use-rtl'
import type { Locale } from '../i18n'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh-Hans', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
] as const

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const { isRtl } = useRtl()

  const handleLanguageChange = (locale: Locale) => {
    i18n.changeLanguage(locale)
    // Set cookie for server-side locale detection
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
  }

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          {isRtl && '🌐'} {/* RTL indicator */}
        </span>
        <select
          value={i18n.language}
          onChange={e => handleLanguageChange(e.target.value as Locale)}
          className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LanguageSwitcher
