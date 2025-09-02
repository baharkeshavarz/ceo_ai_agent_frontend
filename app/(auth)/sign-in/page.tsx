'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Container, Grid, Typography } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import type { FormBuilderProps } from '@/app/components/Fields/components/FormBuilder'
import { FormBuilder } from '@/app/components/Fields'
import { ButtonWithLoading } from '@/app/components/ButtonWithLoading'
import Title from '@/app/components/common/Title'
import type { SignInPayload } from '@/service/iam/types'
import Logo from '@/app/components/common/Logo'

const LoginForm = () => {
  const labels: Record<keyof SignInPayload, string> = {
    email: 'نام کاربری',
    password: 'رمز عبور',
  }

  const resolveSchema: yup.ObjectSchema<SignInPayload> = yup.object({
    email: yup.string().required().required().label(labels.email),
    password: yup.string().required().required().label(labels.password),
  })

  const methods = useForm<SignInPayload>({
    resolver: yupResolver(resolveSchema),
  })

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<SignInPayload> = async (payload) => {
    console.log(payload)
    // const result = await signIn('credentials', {
    //   ...payload,
    //   redirect: false,
    // })

    // if (!result) {
    //   toast.error(t('messages.authenticationError'))
    //   setIsLoading(false)
    // }
    // else {
    //   router.push(DEFAULT_DASHBOARD_OVERVIEW_PATH)
    // }
  }

  const fields: FormBuilderProps['fields'] = {
    email: {
      name: 'email',
      label: labels.email,
      type: 'String',
      props: {
        placeholder: '',
      },
      ui: {
        grid: {
          xs: 12,
        },
      },
    },
    password: {
      name: 'password',
      label: labels.password,
      type: 'String',
      props: {
        placeholder: '',
        type: 'password',
      },
      ui: {
        grid: {
          xs: 12,
        },
      },
    },
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      overflow="hidden"
    >
      <Container maxWidth="sm">
        <Logo />
        <FormProvider {...methods}>
          <Box bgcolor="common.white" width="100%" p={4} borderRadius={2}>
            <Title
              title="دستیار هوشمند مدیران هایمارت"
              sx={{ my: 2, textAlign: 'left' }}
            />
            <Grid
              container
              spacing={2}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormBuilder fields={fields} />
              <Grid item sx={{ xs: 12 }}>
                <ButtonWithLoading
                  isLoading={false}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  <Typography variant="subtitle2">
                    ورود
                  </Typography>
                </ButtonWithLoading>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Container>
    </Box>
  )
}

export default LoginForm
