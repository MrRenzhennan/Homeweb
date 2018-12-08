var scrolltop = function () {
  var scrollPos; 
  if (typeof document.compatMode != 'undefined' &&    document.compatMode != 'BackCompat') 
  { 
    scrollPos = document.documentElement.scrollTop; 
    document.documentElement.scrollTop = 0;
  } 
  else if (typeof document.body != 'undefined') 
  { 
    scrollPos = document.body.scrollTop; 
    document.body.scrollTop = 0;
  } 
}
export default scrolltop;