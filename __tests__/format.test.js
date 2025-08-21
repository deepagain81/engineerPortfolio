import { formatRange } from '@/utils/format'
test('formats yyyy-mm -> Mon yyyy', () => {
  expect(formatRange('2020-01','2021-05')).toBe('Jan 2020 — May 2021')
})
test('supports Present as end', () => {
  expect(formatRange('2020-12','Present')).toContain('Present')
})
