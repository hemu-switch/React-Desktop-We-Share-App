import React from 'react';

function Widgets() {
  return (
    <div>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='encrypted-media'></iframe>
    </div>
  );
}

export default Widgets;