import { redirect } from './redirect'

export async function requireAuth() {
  const isLoggedIn = true
  if (!isLoggedIn) {
    throw redirect('/login')
  }
  return null
}
