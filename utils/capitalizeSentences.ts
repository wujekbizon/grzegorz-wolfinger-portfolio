export function capitalizeSentences(str: string) {
  let sentences = str.split('. ')
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase()
  }
  return sentences.join('. ')
}
