// functions go here
window.addEventListener( 'resize', ( ) => {
    const windows = document.querySelectorAll( '.window' );
    
    windows.forEach( wnd => {
        let lft = parseFloat( wnd.dataset.left );
        let wdt = wnd.offsetWidth;

        wnd.style.marginLeft = ( lft * ( window.innerWidth - wdt ) ) + 'px';
    } );
} );
window.dispatchEvent( new Event( 'resize' ) );

littlefoot.default( );

let mybutton = document.getElementById("floating-windows");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
} 

var scrollElement = document.querySelector('#scroll');

window.addEventListener('scroll', function(){
  var height = document.body.scrollHeight - this.innerHeight;
  var scrolledPixels = this.scrollY;
  var width = ((scrolledPixels / height) * 100).toFixed(2);
  scrollElement.style.width = width + '%';
});
