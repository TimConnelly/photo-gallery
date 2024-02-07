// Set the favorite status
function TnSetFavorite(item) {
    var c = '#880';
    if (item.customData.favorite) {
        c = '#ff0';
    }
    item.$elt.find('[data-ngy2action="custom1"]').css('color', c);
}

// click/touch on custom tool/button
function myTnTool( action, item ) {
    console.log("myTnTool")
    console.dir(item);
    
    switch( action ) {
      case 'info':
        alert('Photo title: '+item.title);
        
        break;
      case 'custom1':
        // switch favorite status
        console.log(item);
        item.customData.favorite=!item.customData.favorite;
        TnSetFavorite(item);
        buyURL = "https://www.pictorem.com/order.html?apiid=OT2PKT2INR&import=" + item.src

        console.log(buyURL)
        window.open(buyURL, "mozillaTab");

        break;
    }
}

function lbCartClick(customElementName, $customIcon, item) {
    console.log("customElementName");
    console.log("item");
    
    switch( customElementName ) {
      case 'custom1':
        // switch favorite status
        console.log(item);
        item.customData.favorite=!item.customData.favorite;
        TnSetFavorite(item);
        buyURL = "https://www.pictorem.com/order.html?apiid=OT2PKT2INR&import=" + item.src

        console.log(buyURL)
        window.open(buyURL, "mozillaTab");

        break;
    }
}

// Add custom elements after one thumbnail is build
function myTnInit( $e, item, GOMidx ) {
    // var st='position:absolute;top:45%;left:10px;padding:10px;'

    // $e.find('.nGY2GThumbnailSub').append('<button style="'+st+'" type="button" class="myngy2info" data-ngy2action="info">photo info</button>');

    TnSetFavorite( item);
}
  