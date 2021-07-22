import React from 'react'

const Widgets = () => {
    return (
        <div className="widgets"
            style={{
                // margin: '0 75vw',
                width: '20vw',
                position: 'sticky',
                left: '75vw',
                bottom: '3300px',
                height: '800px'
            }}>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fspartacodingclub&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                title="widget"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden", width: '340px' }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            </iframe>
        </div >
    )
}

export default Widgets;
