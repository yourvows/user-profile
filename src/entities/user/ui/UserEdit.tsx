import { useState, FC, FormEvent } from 'react'
import { Wrapper } from '@/features/UserProfile/ui/Wrapper'
import { FromInput, FormTextarea, Button, FormGroup } from '@/shared/ui'
import { User } from '@/entities/user/model/types/user.ts'

interface Props {
  onSave: (params: User) => void
  user: User
}

export const UserEdit: FC<Props> = ({ onSave, user }) => {
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [bio, setBio] = useState(user?.bio)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    onSave({ name, email, bio, profilePicture: user?.profilePicture, id: user?.id })
  }

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="whitespace-nowrap text-lg font-semibold leading-none tracking-tight">Edit Profile</h2>
          <p className="text-sm text-[#5e6d82]">Make changes to your profile here. Click save when you're done.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormGroup name="Name" is_required>
            <FromInput value={name} onChange={setName} autoComplete="name" required type="text" />
          </FormGroup>
          <FormGroup name="Email" is_required>
            <FromInput value={email} onChange={setEmail} autoComplete="email" required type="email" />
          </FormGroup>
          <FormGroup name="Bio">
            <FormTextarea value={bio} onChange={setBio} />
          </FormGroup>
          <div className="flex justify-end gap-4">
            <Button className="!bg-gray-400">Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
