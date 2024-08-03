import { FC, useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useApi } from '@/shared/api'
import { Wrapper } from '@/features/UserProfile/ui'
import { FromInput, FormTextarea, Button, FormGroup } from '@/shared/ui'
import type { User } from '@/entities/user/model/types/user.ts'

interface Props {
  user: User
  closeEdit: () => void
}

export const UserEdit: FC<Props> = ({ user, closeEdit }) => {
  const [isChanged, setIsChanged] = useState(false)
  const { $put } = useApi()
  const client = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user?.name,
      email: user?.email,
      bio: user?.bio,
    },
  })

  const watchedValues = useWatch({ control })

  useEffect(() => {
    const { name, email, bio } = watchedValues
    setIsChanged(
      user?.name !== name || user?.email !== email || user?.bio !== bio,
    )
  }, [watchedValues, user])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isChanged) event.preventDefault()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [isChanged])

  const { mutateAsync: updateProfileAsync, isLoading } = useMutation({
    mutationFn: ({ name, email, bio }: Pick<User, 'name' | 'email' | 'bio'>) =>
      $put('/api/user', { name, email, bio }),
    onSuccess: () => {
      client.invalidateQueries('user').then(() => closeEdit())
    },
  })

  const onSubmit = async (data: Pick<User, 'name' | 'email' | 'bio'>) => {
    await updateProfileAsync({ ...data })
  }

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="whitespace-nowrap text-lg font-semibold leading-none tracking-tight">
            Edit Profile
          </h2>
          <p className="text-sm text-[#5e6d82]">
            Make changes to your profile here. Click save when you're done.
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(({ name, email, bio }) =>
            onSubmit({ name, email, bio }),
          )}
        >
          <FormGroup htmlFor="name" label="Name" is_required>
            <FromInput
              id="name"
              placeholder="John Doe"
              autoComplete="name"
              type="text"
              disabled={isLoading}
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 first-letter:capitalize">
                {errors.name.message}
              </p>
            )}
          </FormGroup>
          <FormGroup htmlFor="email" label="Email" is_required>
            <FromInput
              id="email"
              placeholder="john@doe.com"
              autoComplete="email"
              type="email"
              disabled={isLoading}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 first-letter:capitalize">
                {errors.email.message}
              </p>
            )}
          </FormGroup>
          <FormGroup htmlFor="bio" label="Bio">
            <FormTextarea
              rows={3}
              id="bio"
              disabled={isLoading}
              {...register('bio')}
            />
          </FormGroup>
          <div className="flex justify-end gap-4">
            <Button
              disabled={isLoading}
              onClick={closeEdit}
              type="button"
              className="!bg-gray-400"
            >
              Cancel
            </Button>
            <Button
              loading={isLoading}
              disabled={isLoading || !isChanged}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
