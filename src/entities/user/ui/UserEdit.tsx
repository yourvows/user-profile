import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation, useQueryClient } from 'react-query'
import { Wrapper } from '@/features/UserProfile/ui'
import { FromInput, FormTextarea, Button, FormGroup } from '@/shared/ui'
import { useApi } from '@/shared/api'
import type { User } from '@/entities/user/model/types/user.ts'

interface Props {
  user: User
  closeEdit: () => void
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    bio: yup.string(),
  })
  .required()

export const UserEdit: FC<Props> = ({ user, closeEdit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { $put } = useApi()
  const client = useQueryClient()

  const { mutateAsync: updateProfileAsync } = useMutation({
    mutationFn: ({ name, email, bio, profilePicture }: User) =>
      $put('/user', { name, email, bio, profilePicture }),
    onSuccess: () => {
      client.invalidateQueries('user').then(() => closeEdit())
    },
  })

  const onSubmit = async (data: Pick<User, 'name' | 'email' | 'bio'>) => {
    const { name, email, bio } = data
    await updateProfileAsync({
      name,
      email,
      bio,
      profilePicture: user?.profilePicture,
      id: user?.id,
    })
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
          <FormGroup forLabel="name" name="Name" is_required>
            <FromInput
              id="name"
              defaultValue={user?.name}
              placeholder="John Doe"
              autoComplete="name"
              type="text"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </FormGroup>
          <FormGroup forLabel="email" name="Email" is_required>
            <FromInput
              id="email"
              defaultValue={user?.email}
              placeholder="john@doe.com"
              autoComplete="email"
              type="email"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </FormGroup>
          <FormGroup forLabel="bio" name="Bio">
            <FormTextarea
              defaultValue={user?.bio}
              id="bio"
              {...register('bio')}
            />
          </FormGroup>
          <div className="flex justify-end gap-4">
            <Button onClick={closeEdit} className="!bg-gray-400">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
