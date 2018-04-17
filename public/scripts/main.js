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

var x = document.cookie;
if (x === 'locale=fr') {
  $('#frlang').addClass('displayNone');
  $('#fr-logo').removeClass('displayNone');
  $('.jasmina').css('margin-top', '3px');
  $('#fields-title').css('width', '375px');
  $('#about-title').css('width', '135px');
}
else if (x === 'locale=srb') {
  $('#srblang').addClass('displayNone');
  $('#srb-logo').removeClass('displayNone');
  $('#fields-title').css('width', '253px');
  $('#about-title').css('width', '121px');
}
else if (x === 'locale=en') {
  $('#englang').addClass('displayNone');
  $('#en-logo').removeClass('displayNone');
  $('#fields-title').css('width', '310px');
  $('#about-title').css('width', '153px');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
