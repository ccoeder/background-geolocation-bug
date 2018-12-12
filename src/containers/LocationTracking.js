import { Component } from "react";
import BackgroundGeolocation from "react-native-background-geolocation";

export default class LocationTracking extends Component {
  componentWillMount() {
    BackgroundGeolocation.onLocation(this.onLocation, this.onError);
    BackgroundGeolocation.onMotionChange(this.onMotionChange);
    BackgroundGeolocation.onActivityChange(this.onActivityChange);
    BackgroundGeolocation.onProviderChange(this.onProviderChange);

    BackgroundGeolocation.ready(
      {
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        stopTimeout: 1,
        debug: true,
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: true,
        startOnBoot: false,
        autoSync: false
      },
      state => {
        console.log(
          "- BackgroundGeolocation is configured and ready: ",
          state.enabled
        );

        if (!state.enabled) {
          BackgroundGeolocation.start(function() {
            console.log("- Start success");
          });
        }
      }
    );
  }

  componentWillUnmount() {
    BackgroundGeolocation.removeListeners();
  }

  onLocation(location) {
    console.log("[location] -", location);
  }

  onError(error) {
    console.warn("[location] ERROR -", error);
  }

  onActivityChange(event) {
    console.log("[activitychange] -", event); // eg: 'on_foot', 'still', 'in_vehicle'
  }

  onProviderChange(provider) {
    console.log("[providerchange] -", provider.enabled, provider.status);
  }

  onMotionChange(event) {
    console.log("[motionchange] -", event.isMoving, event.location);
  }

  render() {
    return null;
  }
}
