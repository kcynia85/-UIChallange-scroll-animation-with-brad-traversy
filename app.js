{
  const contents = document.querySelectorAll('.content');

  const checkContents = () => {
    const triggerBottom = window.innerHeight / 5 * 4
    
    contents.forEach(content => {
      const boxTop = content.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
        content.classList.add('content--show')
      } else {
        content.classList.remove('content--show')
      }
    })
  }
  
  window.addEventListener('scroll', checkContents)
  checkContents();
}