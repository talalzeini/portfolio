const hey = document.getElementById('over');
function on(){
      hey.classList.add('overflow');
      document.getElementById('this').setAttribute('onclick', 'off()');
}
function off(){
      hey.classList.remove('overflow');
      document.getElementById('this').setAttribute('onclick', 'on()');
}
