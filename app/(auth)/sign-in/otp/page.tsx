'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Edit, HourglassTopOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormHelperText,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import type { SubmitHandler } from 'react-hook-form'
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form'
import * as yup from 'yup'
import { grey, red } from '@mui/material/colors'
import { digitsFaToEn } from '@persian-tools/persian-tools'
import OtpInput from 'react-otp-input'
import { t } from 'i18next'
import auth from '@/lib/auth'
import {
  DEFAULT_HOME_PAGE_PATH,
  DEFAULT_LOGIN_PATH,
} from '@/constants/routes'

import Logo from '@/app/components/common/Logo'
import { EnglishAndPersianNumbersRegex, RESEND_AUTH_TIMER } from '@/constants/general'
import { ButtonWithLoading } from '@/app/components/ButtonWithLoading'
import { loginByOtp, sendLoginOtp } from '@/service/iam'

type FieldNames = Record<'password', string>

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [timerEndDate, setTimerEndDate] = useState(
    Date.now() + RESEND_AUTH_TIMER * 1000,
  )

  const userName = searchParams.get('username') || ''
  const labels: Record<keyof FieldNames, string> = {
    password: 'کد تایید',
  }

  const resolveSchema: yup.ObjectSchema<FieldNames> = yup.object({
    password: yup
      .string()
      .nullable()
      .required()
      .matches(
        EnglishAndPersianNumbersRegex,
        'فقط وارد کردن اعداد مجاز است.',
      )
      .min(6)
      .label(labels.password),
  })

  const methods = useForm<FieldNames>({
    resolver: yupResolver(resolveSchema),
  })

  const { control, handleSubmit, watch } = methods

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: FieldNames) => {
      const { data } = await loginByOtp({
        payload: { ...payload, userName },
      })

      if (data?.succeed) {
        auth.login(data?.value)
        auth.loadUser()
        router.push(DEFAULT_HOME_PAGE_PATH)
      }
    },
  })

  const onSubmit: SubmitHandler<FieldNames> = async (payload) => {
    await mutateAsync(payload)
  }

  const [password] = watch(['password'])

  useEffect(() => {
    if (!userName)
      router.push(DEFAULT_LOGIN_PATH)
  }, [userName, router])

  useEffect(() => {
    if (password?.length === 6)
      handleSubmit(onSubmit)()
  }, [password, handleSubmit])

  const { mutateAsync: mutateAsyncSendAgain }
    = useMutation({
      mutationFn: sendLoginOtp,
    })

  const handleClickOnSendAgain = async () => {
    setTimerEndDate(Date.now() + RESEND_AUTH_TIMER * 1000)
    await mutateAsyncSendAgain({ payload: { phoneNumber: userName } })
  }

  return (
    <FormProvider {...methods}>
      <Card
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        variant="outlined"
        sx={{
          p: 2,
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Stack spacing={3} justifyContent="center" alignItems="center">
              <Box
                sx={{
                  pt: 2,
                }}
              >
                <Link href={DEFAULT_HOME_PAGE_PATH}>
                  <Logo />
                </Link>
              </Box>
              <Typography
                color="common.white"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {t('pages.confirm.title')}
              </Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant="body2">
                کد ارسال شده به شماره موبایل {userName} را وارد نمایید
              </Typography>

              <Box sx={{ direction: 'rtl', mt: 2 }}>
                <Controller
                  control={control}
                  name="password"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <>
                        <OtpInput
                          containerStyle={{
                            direction: 'ltr',
                            justifyContent: 'space-between',
                          }}
                          inputStyle={{
                            width: 45,
                            height: 45,
                            marginRight: 8,
                            borderRadius: 4,
                            boxShadow: 'none',
                            outlineWidth: 0,
                            border: '1px solid',
                            borderColor: error?.message ? red[500] : grey[300],
                            textAlign: 'center',
                            fontSize: 24,
                          }}
                          value={value}
                          onChange={(value) => {
                            onChange(digitsFaToEn(value))
                          }}
                          numInputs={6}
                          inputType="tel"
                          renderInput={props => <input {...props} />}
                        />
                        {!!error?.message && (
                          <FormHelperText error sx={{ textAlign: 'center' }}>
                            {error.message as string}
                          </FormHelperText>
                        )}
                      </>
                    )
                  }}
                />
              </Box>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Countdown
                key={timerEndDate}
                date={timerEndDate}
                renderer={(props) => {
                  return (
                    <Button
                      color="warning"
                      variant="outlined"
                      startIcon={<HourglassTopOutlined />}
                      disabled={!props.completed}
                      onClick={handleClickOnSendAgain}
                      sx={{
                        width: 'fit-content',
                      }}
                    >
                      {props.completed
                        ? 'ارسال مجدد'
                        : `${props.total / 1000} ثانیه تا ارسال مجدد`}
                    </Button>
                  )
                }}
              />
              <Button
                LinkComponent={Link}
                href={DEFAULT_LOGIN_PATH}
                variant="outlined"
                color="warning"
                startIcon={<Edit />}
              >
                ویرایش شماره
              </Button>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <ButtonWithLoading
            fullWidth
            isLoading={isPending}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            <Typography color="common.white">
              ورود
            </Typography>
          </ButtonWithLoading>
        </CardActions>
      </Card>
    </FormProvider>
  )
}
export default Page
