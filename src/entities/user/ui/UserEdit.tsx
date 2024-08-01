import { useState, FC, FormEvent } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Wrapper } from '@/features/UserProfile/ui'
import { FromInput, FormTextarea, Button, FormGroup } from '@/shared/ui'
import { useApi } from '@/shared/api'
import type { User } from '@/entities/user/model/types/user.ts'

interface Props {
  user: User
  closeEdit: () => void
}

export const UserEdit: FC<Props> = ({ user, closeEdit }) => {
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [bio, setBio] = useState(user?.bio)

  const { $put } = useApi()
  const client = useQueryClient()

  const { mutate: updateProfile } = useMutation({
    mutationFn: ({ name, email, bio, profilePicture }: User) =>
      $put(`/user`, { name, email, bio, profilePicture }),
    onSuccess: () => {
      client.invalidateQueries('user').then(() => closeEdit())
    },
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    updateProfile({
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormGroup forLabel="name" name="Name" is_required>
            <FromInput
              value={name}
              id="name"
              onChange={setName}
              placeholder="John Doe"
              autoComplete="name"
              required
              type="text"
            />
          </FormGroup>
          <FormGroup forLabel="email" name="Email" is_required>
            <FromInput
              value={email}
              id="email"
              onChange={setEmail}
              placeholder="john@doe.com"
              autoComplete="email"
              required
              type="email"
            />
          </FormGroup>
          <FormGroup forLabel="bio" name="Bio">
            <FormTextarea id="bio" value={bio} onChange={setBio} />
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
