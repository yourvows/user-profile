import { http, HttpResponse } from 'msw'
import { sleep } from '@/shared/utils'

interface User {
  id: string
  name: string
  email: string
  bio: string
  profilePicture: string
}

const user: User = {
  id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Software Developer',
  profilePicture:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
}

export const handlers = [
  http.get('http://localhost:4000/api/user', async () => {
    await sleep(2000)
    return HttpResponse.json(user, { status: 200 })
  }),

  http.put('http://localhost:4000/api/user', async () => {
    await sleep(2000)
    return HttpResponse.json({ success: true }, { status: 200 })
  }),
]
