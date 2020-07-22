(() => {
  setInterval(()=>{
    document.getElementsByTagName('button')[4].click(); //PS : If button[4] is not working, search for index of like button and enter here. CrossCheck like button before running.
    document.querySelector('a.coreSpriteRightPaginationArrow').click();
},3000)
})()
