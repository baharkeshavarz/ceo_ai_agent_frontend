'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import type { FormBuilderProps } from '@/app/components/Fields/components/FormBuilder'
import { FormBuilder } from '@/app/components/Fields'
import Title from '@/app/components/common/Title'
import type { LoginPayload } from '@/service/iam/types'
import Logo from '@/app/components/common/Logo'
import { DEFAULT_HOME_PAGE_PATH } from '@/constants/routes'
import { login } from '@/service/iam'
import { ButtonWithLoading } from '@/app/components/ButtonWithLoading'

const LoginForm = () => {
  const router = useRouter()
  const labels: Record<keyof LoginPayload, string> = {
    username: 'نام کاربری',
    password: 'رمز عبور',
  }

  const resolveSchema: yup.ObjectSchema<LoginPayload> = yup.object({
    username: yup.string().required('وارد کردن این فیلد اجباری است').label(labels.username),
    password: yup.string().required('وارد کردن این فیلد اجباری است').label(labels.password),
  })

  const methods = useForm<LoginPayload>({
    resolver: yupResolver(resolveSchema),
  })

  const { handleSubmit } = methods

  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
  })

  const onSubmit: SubmitHandler<LoginPayload> = async (payload) => {
    // const { data } = await mutateAsync({ payload })

    // if (data)
    router.push(DEFAULT_HOME_PAGE_PATH)
  }

  const fields: FormBuilderProps['fields'] = {
    username: {
      name: 'username',
      label: labels.username,
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
        placeholder: '**********',
      },
      ui: {
        grid: {
          xs: 12,
        },
      },
    },
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
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={6}>
            <Logo />
            <Title
              title="دستیار هوشمند مدیران هایمارت"
              sx={{ my: 2, textAlign: 'center' }}
            />
          </Box>
          <Grid
            container
            spacing={2}
          >
            <FormBuilder fields={fields} />
          </Grid>
        </CardContent>
        <CardActions>
          <ButtonWithLoading
            isLoading={isPending}
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
        </CardActions>
      </Card>
    </FormProvider >
  )
}

export default LoginForm
