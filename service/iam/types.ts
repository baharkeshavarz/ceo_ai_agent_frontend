import type { Basic, Response } from '../types/common'

export type SendLoginOtpPayload = {
  phoneNumber: string
}

export type RefreshTokenPayload = {
  refreshToken: string
}

export type LoginPayload = {
  username: string
  password: string
}

export type SendLoginOtpService = {
  ({ payload }: { payload: SendLoginOtpPayload }): Response
}

export type LoginByRefreshTokenService = {
  ({ payload }: { payload: RefreshTokenPayload }): Response
}

export type LoginService = {
  ({ payload }: { payload: LoginPayload }): Response<Basic<boolean>>
}
