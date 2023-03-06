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