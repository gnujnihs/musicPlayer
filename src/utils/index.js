export const formatTime = second => {
  let i = 0;
  let h = 0;
  let s = parseInt(second);

  if (s > 60) {
    i = parseInt(s / 60)
    s = parseInt(s % 60)
    
    if (i > 60) {
      h = parseInt(i / 60)
      i = parseInt(i % 60)
    }
  }
}