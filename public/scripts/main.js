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
console.log(x);
if (x === 'locale=fr') {
  $('#frlang').addClass('displayNone');
}
else if (x === 'locale=srb') {
  $('#srblang').addClass('displayNone');
}
else if (x === 'locale=en') {
  $('#englang').addClass('displayNone');
}
