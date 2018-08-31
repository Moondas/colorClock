function addLeadingZero(num) {
  return (num < 10 ? '0' : '') + num.toString();
}

// This is not true, because the index.html call this
// eslint-disable-next-line
function colorClock() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var mHours = 255 - Math.round(256 / 24) * hours;
  var mMins = 255 - Math.round(256 / 60) * mins;
  var mSecs = Math.round(256 / 60) * secs;
  
  var rgbColor = 'rgb(' + mHours + ', ' + mMins + ', ' + mSecs + ')';
  
  var clockFace = addLeadingZero(hours).toString() + ':' + addLeadingZero(mins) + ':' + addLeadingZero(secs);
  
  setTimeout(function() {
    colorClock();
  }, 1000);
  document.body.style.background = rgbColor;
  document.getElementById('clock').innerHTML = clockFace;
}
