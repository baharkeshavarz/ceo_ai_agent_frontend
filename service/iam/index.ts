import type { LoginByRefreshTokenService, LoginService, SendLoginOtpService } from './types'
import _axios from '@/lib/axios'

const BASE_URL = '/auth'

export const login: LoginService = ({ payload }) => {
  return _axios.post(`${BASE_URL}/login`, payload)
}

export const sendLoginOtp: SendLoginOtpService = ({ payload }) => {
  return _axios.post(`${BASE_URL}/sendOtp`, payload)
}

export const loginByRefreshToken: LoginByRefreshTokenService = ({
  payload,
}) => {
  return _axios.post(`${BASE_URL}/loginByRefreshToken`, payload)
}

export const getProfile = () => {
  return _axios.get(`${BASE_URL}/getProfile`)
}

export const loginByOtp: LoginService = ({ payload }) => {
  return _axios.post(`${BASE_URL}/loginOtp`, payload)
}
