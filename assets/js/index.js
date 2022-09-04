const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth : true},
    smartphone: {smooth : true},
});
scroll.on("scroll",()=>{
    if(document.querySelector('#color.is-inview')){
        document.body.style.backgroundColor = "#000101";
        document.body.style.color = "#fefeff";
        
    }
    else{
        document.body.style.backgroundColor = "#fefeff";
        document.body.style.color = "#000101";
        
    }
})