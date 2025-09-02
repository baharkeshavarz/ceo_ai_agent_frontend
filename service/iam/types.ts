import type { Basic, Response } from '../types/common'

export type SignInPayload = {
  email: string
  password: string
}

export type AuthPayload = {
  email: string
  password: string
  loginProvider?: string
  deviceId?: string
}

export type ResetPasswordPayload = {
  email: string
  password: string
  confirmPassword: string
}

export type AuthResponsePayload = {
  accessToken: string
  refreshToken?: string
  user: { id: string | number; name?: string; email?: string }
}

export type SignInService = {
  (args: { payload: AuthPayload }): Response<Basic<AuthResponsePayload>>
}

export type SignUpPayload = {
  email: string
  password: string
  name: string
}

export type ForgetPasswordPayload = {
  email: string
}

export type SignUpService = {
  (args: { payload: SignUpPayload }): Response
}

export type ForgetPasswordService = {
  (args: { payload: ForgetPasswordPayload }): Response
}
