import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68], //metade da horizontal e o mais extremo na vertical
    popupAnchor: [175, 0]
  })
  
  export default mapIcon;