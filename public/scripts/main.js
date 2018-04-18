function initMap() {
  var myLatLng = { lat: 44.7950, lng: 20.4694 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false
  });
  var image = 'https://image.ibb.co/j91Emc/LOB_VAGA_1.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'LAW',
    icon: image,
  });
};


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var x = getCookie('locale');

if ( x === 'fr') {
  $('#frlang').addClass('displayNone');
  $('#fr-logo').removeClass('displayNone');
  $('.jasmina').css('margin-top', '3px');
  $('#fields-title').css('width', '364px');
  $('#about-title').css('width', '135px');
}
else if (x === 'srb') {
  $('#srblang').addClass('displayNone');
  $('#srb-logo').removeClass('displayNone');
  $('#fields-title').css('width', '253px');
  $('#about-title').css('width', '128px');
  $('#tatjana3').addClass('displayNone');
}
else if (x === 'en') {
  $('#englang').addClass('displayNone');
  $('#en-logo').removeClass('displayNone');
  $('#fields-title').css('width', '302px');
  $('#about-title').css('width', '153px');
  $('#tatjana2').addClass('displayNone');
  $('#tatjana3').addClass('displayNone');
  $('#aleksandar1').addClass('displayNone');
  $('#nikola1').addClass('displayNone');
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
