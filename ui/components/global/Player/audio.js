function AudioInit (e) {
  if (e) {
    const audio = new Audio()
          audio.src = e
    return audio
  }

  return console.error(new Error('The path to the file was not found'))
}

function AudioTime(time) {
  let hour = Math.floor(time / (60 * 60)),
      resultMinutes = time % (60 * 60),
      minute = Math.floor(resultMinutes / 60),
      resultSeconds = resultMinutes % 60,
      second = Math.ceil(resultSeconds),
      fullTime;

    if (second === 60) {
      second = 0;
      minute = minute + 1;
    }
    if (second < 10) {
      second = '0' + second;
    }
    if (minute === 60) {
      minute = 0;
      hour = hour + 1;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (hour === 0) {
      fullTime = minute + ':' + second;
    } else {
      fullTime = hour + ':' + minute + ':' + second;
    }
    return fullTime;
}

export { AudioInit, AudioTime }