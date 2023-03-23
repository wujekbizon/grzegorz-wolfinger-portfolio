export const humanReadableDate = new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
