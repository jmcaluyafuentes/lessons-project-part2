function addStash(event) {
  // Your code here
  const x = event.pageX
  console.log(x)
  const y = event.pageY
  console.log(y)
  
  const stashPic = document.getElementById('stash-pic')

  stashPic.style.left = `${x - 100}px`
  stashPic.style.top = `${y - 20}px`

}

// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
document.body.addEventListener('click', addStash)