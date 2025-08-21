import storage from '@/utils/storage'

describe('storage', () => {
  beforeEach(() => localStorage.clear())
  test('set/get values', () => {
    storage.set('k', 'v')
    expect(storage.get('k')).toBe('v')
  })
  test('fallback when missing', () => {
    expect(storage.get('missing', 'x')).toBe('x')
  })
  test('remove', () => {
    storage.set('k', 'v')
    storage.remove('k')
    expect(storage.get('k', 'n')).toBe('n')
  })
})
