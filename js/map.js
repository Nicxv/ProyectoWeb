function iniciarMap(){
    var coord = {lat: -33.36603678760494 ,lng: -70.67828704528719};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}