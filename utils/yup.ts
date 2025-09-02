import {
  phoneNumberValidator,
  verifyIranianNationalId,
} from '@persian-tools/persian-tools'
import { type LocaleObject, setLocale } from 'yup'
import * as yup from 'yup'

const customLocale: LocaleObject = {
  string: {
    length({ length, label, path }) {
      return `این فیلد میبایست ${length} کاراکتر باشد.`
    },
    max: ({ max }) => {
      return `حداکثر ${max} کاراکتر مجاز است.`
    },
    min: ({ min }) => {
      return `حداقل ${min} کاراکتر وارد کنید.`
    },
    matches: () => {
      return `مقدار وارد شده معتبر نیست.`
    },
    email: () => {
      return `ایمیل وارد شده معتبر نیست.`
    },
  },
  mixed: {
    required: 'وارد کردن این فیلد اجباری است.',
    notType: 'وارد کردن این فیلد اجباری است.',
  },
}

setLocale(customLocale)

export const POSTAL_CODE_MAX_LENGTH = 10
export const MOBILE_MAX_LENGTH = 11
export const GLOBAL_TEXTAREA_MAX_LENGTH = 512
export const GLOBAL_URL_MAX_LENGTH = 512

yup.addMethod(yup.string, 'globalTextAreaMaxLength', function () {
  return this.max(
    GLOBAL_TEXTAREA_MAX_LENGTH,
    `حداکثر ${GLOBAL_TEXTAREA_MAX_LENGTH} کاراکتر مجاز است.`,
  )
})

yup.addMethod(yup.string, 'globalURLMaxLength', function () {
  return this.max(
    GLOBAL_URL_MAX_LENGTH,
    `حداکثر ${GLOBAL_URL_MAX_LENGTH} کاراکتر مجاز است.`,
  )
})

yup.addMethod(yup.string, 'isMobileNumber', function () {
  return this.min(11)
    .max(11)
    .test(
      'check-mobile-number',
      ({ label }) => 'مقدار وارد شده معتبر نیست.',
      (value) => {
        if (!value)
          return true

        const validPrefixes = new Set(['0923', '0999'])
        const isPatternValid = validPrefixes.has(value.substring(0, 4))

        return isPatternValid || phoneNumberValidator(value)
      },
    )
})

yup.addMethod(yup.string, 'isNationalCode', function () {
  return this.test(
    'check-national-code',
    ({ label }) => 'مقدار وارد شده معتبر نیست.',
    (value) => {
      return verifyIranianNationalId(value)
    },
  )
})

yup.addMethod(yup.string, 'isNationalIdentification', function () {
  return this.length(MOBILE_MAX_LENGTH)
})
