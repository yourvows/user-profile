import { http, HttpResponse } from 'msw'

interface User {
  id: string
  name: string
  email: string
  bio: string
  profilePicture: string
}

const initialUser: User = {
  id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Software Developer',
  profilePicture:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
}

let user = { ...initialUser }

function updateUser(updatedFields: Partial<User>) {
  user = { ...user, ...updatedFields }
}

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json(user, { status: 200 })
  }),
  http.put('/user', async ({ request }) => {
    const updatedFields: Partial<User> = await request
    updateUser(updatedFields)
    return HttpResponse.json(user, { status: 200 })
  }),
]
