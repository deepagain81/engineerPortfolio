import { CONFIG } from '@/config'

test('config baseline fields exist', () => {
  expect(CONFIG.profile.name).toBeTruthy()
  expect(Array.isArray(CONFIG.experience)).toBe(true)
  expect(Array.isArray(CONFIG.projects)).toBe(true)
})
