$('nav').affix({
      offset: {
        top: $('.intro').height()
      }
});

img.onclick = function(){
    modal.style.display = "inline-block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
