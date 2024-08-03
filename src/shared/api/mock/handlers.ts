import { http, HttpResponse } from 'msw'
import { sleep } from '@/shared/utils'
import { User } from '@/entities/user/model/types/user.ts'

let user: User = {
  id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Software Developer',
  profilePicture:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
}

function updateUser(updatedUser: Pick<User, 'name' | 'email' | 'bio'>) {
  user = Object.assign(user, updatedUser)
}

export const handlers = [
  http.get('/api/user', async () => {
    await sleep(500)
    return HttpResponse.json(user, { status: 200 })
  }),

  http.put('/api/user', async ({ request }) => {
    const body = (await request.json()) as Pick<User, 'name' | 'email' | 'bio'>
    updateUser(body)
    await sleep(500)
    return HttpResponse.json({ success: true }, { status: 200 })
  }),
]
