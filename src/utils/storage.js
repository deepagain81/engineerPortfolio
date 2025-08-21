const safe = {
  get(key, fallback = '') {
    try {
      const v = localStorage.getItem(key)
      return v !== null ? v : fallback
    } catch { return fallback }
  },
  set(key, value) {
    try { localStorage.setItem(key, value) } catch {}
  },
  remove(key) {
    try { localStorage.removeItem(key) } catch {}
  }
}
export default safe
