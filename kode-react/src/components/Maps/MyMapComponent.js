import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzCvc09cykHCnMlj6cuwEBbx5nkJaIrWQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 53.350158, lng: -6.264861 }}>
        <Marker
            defaultPosition={{lat: 53.350158, lng: -6.264861}}
        />

        <Marker
            defaultPosition={{ lat: 53.347672, lng: -6.268292 }}
        />

        <Marker
            defaultPosition={{ lat: 53.349322, lng: -6.247530 }}
        />

        <Marker
            defaultPosition={{ lat: 53.346473, lng: -6.245153 }}
        />

        <Marker
            defaultPosition={{ lat: 53.341918, lng: -6.248120 }}
        />

        <Marker
            defaultPosition={{ lat: 53.337144, lng: -6.268237 }}
        />

    </GoogleMap>



));

    export default MyMapComponent ;