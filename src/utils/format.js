export const monthName = (m) => ({
  '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
  '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
}[m] || '')

export const formatRange = (start, end) => {
  if (!start && !end) return ''
  const [sy, sm] = (start || '').split('-')
  const [ey, em] = (end || '').split('-')
  const s = sy ? `${monthName(sm)} ${sy}` : ''
  const e = end === 'Present' ? 'Present' : ey ? `${monthName(em)} ${ey}` : ''
  return [s, e].filter(Boolean).join(' — ')
}
