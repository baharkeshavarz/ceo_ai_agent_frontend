export const i18n = {
  defaultLocale: 'ar',
  locales: ['en', 'es', 'zh-Hans', 'ja', 'ar'],
} as const

export type Locale = typeof i18n['locales'][number]
