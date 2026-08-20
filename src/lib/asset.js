export function asset(path) {
  const base = import.meta.env.BASE_URL
  const cleaned = path.replace(/^\//, '')
  return `${base}${cleaned}`
}
