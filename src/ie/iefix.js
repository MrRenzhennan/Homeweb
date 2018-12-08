console.log("fix for ie");
var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General

document.body.style.zoom = 1.0
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;
