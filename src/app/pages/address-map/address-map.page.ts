import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LocationService,
  MyLocation,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'address-map',
  templateUrl: './address-map.page.html',
  styleUrls: ['./address-map.page.scss'],
})
export class AddressMapPage implements OnInit {
  map: GoogleMap;
  location: {
    latitude: number,
    longitude: number
  };

  constructor(
    private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    // Run on browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCv-QHkSLxy0h1SUiHZNCDqYafxv-nLrxo',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCv-QHkSLxy0h1SUiHZNCDqYafxv-nLrxo'
    });

    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: myLocation.latLng.lat,
            lng: myLocation.latLng.lng
          },
          zoom: 20
        }
      };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    const marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: myLocation.latLng.lat,
        lng: myLocation.latLng.lng
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });


    });
  }
}
