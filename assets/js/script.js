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

const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
	const scroll = document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (scroll / height) * 100;

	if (scrolled <= 1) {
		progressBar.style.height = 1 + "%";
	} else if (scrolled >= 2 && scrolled <= 99.9) {
		progressBar.style.height = scrolled + "%";
		progressBar.classList.remove("glow");
	} else if (scrolled === 100) {
		progressBar.style.height = scrolled + "%";
		// 		Do something when reached 100% scroll
		progressBar.classList.add("glow");
	}
};

const menuBtns = document.querySelectorAll( 'nav ul li a' );
menuBtns.forEach( btn => {
  btn.addEventListener( 'click', ( ) => {
    const windows = document.querySelectorAll( '.window' );
    windows.forEach( window => {
      window.scrollTop = 0;
    } );
  } );
} );

const backToTopBtns = document.querySelectorAll( '.btn-back-to-top' );
backToTopBtns.forEach( btn => {
  btn.addEventListener( 'click', ( ) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } );
} );

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//   //   mybutton.style.display = "block";
//   // } else {
//   //   mybutton.style.display = "none";
//   // }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

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

const scrollElement = document.querySelector('#scroll');
const floatingWindows = document.getElementById( 'floating-windows' );

window.addEventListener('scroll', function(){
  const scrollStartY = floatingWindows.offsetTop;

  var height = document.body.scrollHeight - this.innerHeight - scrollStartY;
  var scrolledPixels = this.scrollY - scrollStartY;
  var width = ((scrolledPixels / height) * 100).toFixed(2);
  
  scrollElement.style.width = width + '%';
});

// document.body.onmousemove = function(e) {
//   document.documentElement.style.setProperty (
//     '--x', (
//       e.clientX+window.scrollX
//     )
//     + 'px'
//   );
//   document.documentElement.style.setProperty (
//     '--y', (
//       e.clientY+window.scrollY
//     ) 
//     + 'px'
//   );
// }

const cursorBig = document.querySelector('.big');


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
  cursorBig.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
 
}

window.addEventListener('mousemove', positionElement)

var clr = "#" + ((1 << 24) * Math.random() | 0).toString(16);

// this statement sets the background color of the div with class .container to red
var pane_width = $(".random-pane").width() - $(".grid-item").width();
var pane_height = $(".random-pane").height() - $(".grid-item").height();

// loop through all the items in the random-pane
$(".random-pane").children().each(function () {

   // get a random x position
   var x = Math.round(Math.random() * pane_width) * 1;
   // get a random y position
   var y = Math.round(Math.random() * pane_height) * -2;

   // change the position of the item
   $(this).css("top", y);
   $(this).css("left", x);

   // add hover functionality, to move item to the top on hover
   $(this).on("mouseover", function () {
       // this is a small hack, removing it and adding it again moves it to the top
       $(this).parent().append(this);
   });

});


