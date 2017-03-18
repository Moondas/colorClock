function colorClock() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var mHours = 256-Math.round(256/24)*hours;
  var mMins = 256-Math.round(256/60)*mins;
  var mSecs = Math.round(256/60)*secs;
  
  var hexColor = '#' + mHours.toString(16) + mMins.toString(16) + mSecs.toString(16);
  
  if (secs < 10) {
    secs = '0' + secs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  var clockFace = hours+':'+mins+':'+secs;
  
  setTimeout(function(){
    colorClock();
  },1000);
  document.body.style.background = hexColor;
  document.getElementById('clock').innerHTML = clockFace;
}
colorClock();
