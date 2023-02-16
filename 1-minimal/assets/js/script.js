$(document).ready(function() {
    // functions go here

    $( window ).resize( function( ) {
        $( '.window' ).each( function( index, wnd ) {
            let lft = parseFloat( wnd.dataset.left );
            let wdt = wnd.offsetWidth;

    console.log( wnd );

            wnd.style.marginLeft = ( lft * ( window.innerWidth - wdt ) ) + 'px';
        } );
    } );
    $( window ).trigger( 'resize' );
});