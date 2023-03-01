export default function audio(e) {
  if (e) {
    const audio = new Audio()
          audio.src = e
    return audio
  }

  return console.error(new Error('The path to the file was not found'))
}