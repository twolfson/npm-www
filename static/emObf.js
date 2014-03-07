$(document).ready(function () {
  var e = $('#email')
  var em = decodeURIComponent(e.data('email'))
  e.html('<a href="mailto:' + em + '">' + em + '</a>')
})

