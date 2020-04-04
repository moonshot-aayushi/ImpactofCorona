import axios from 'axios';


import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
// import from 'react-leaflet';

// import { promiseToFlyTo, getCurrentLocation } from 'lib/map';



import Layout from 'components./Layout';
import Container from 'components./Container';
import Map from 'components./Map';

// import gatsby_astronaut from 'assets/images/gatsby-astronaut.jpg';

const LOCATION = {
  lat: 0,
  lng: 0
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 3;
// const ZOOM = 10;

// const timeToZoom = 2000;
// const timeToOpenPopupAfterZoom = 4000;
// const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

// const popupContentHello = `<p>Hello 👋</p>`;
// const popupContentGatsby = `
//   <div class="popup-gatsby">
//     <div class="popup-gatsby-image">
//       <img class="gatsby-astronaut" src=${gatsby_astronaut} />
//     </div>
//     <div class="popup-gatsby-content">
//       <h1>Gatsby Leaflet Starter</h1>
//       <p>Welcome to your new Gatsby site. Now go build something great!</p>
//     </div>
//   </div>
// `;

const IndexPage = () => {

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement:map} = {}) {


     let response;

    try {
      response = await axios.get('https://corona.lmao.ninja/countries');
    } catch(e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;

    const hasData = Array.isArray(data) && data.length > 0;

if ( !hasData ) return;

const geoJson = {
  type: 'FeatureCollection',
  features: data.map((country = {}) => {
    const { countryInfo = {} } = country;
    const { lat, long: lng } = countryInfo;
    return {
      type: 'Feature',
      properties: {
       ...country,
      },
      geometry: {
        type: 'Point',
        coordinates: [ lng, lat ]
      }
    }
  })
}


function countryPointToLayer (feature = {}, latlng){
   const { properties = {} } = feature;
    let updatedFormatted;
    let casesString;

    const {
      country,
      updated,
      cases,
      deaths,
      recovered
    } = properties

    casesString = `${cases}`;

    if ( cases > 1000 ) {
      casesString = `${casesString.slice(0, -3)}k+`
    }

    if ( updated ) {
      updatedFormatted = new Date(updated).toLocaleString();
    }

    const html = `
      <span class="icon-marker">
        <span class="icon-marker-tooltip">
          <h2>${country}</h2>
          <ul>
            <li><strong>Confirmed:</strong> ${cases}</li>
            <li><strong>Deaths:</strong> ${deaths}</li>
            <li><strong>Recovered:</strong> ${recovered}</li>
            <li><strong>Last Update:</strong> ${updatedFormatted}</li>
          </ul>
        </span>
        ${ casesString }
      </span>
      
    `;

    return L.marker( latlng, {
      icon: L.divIcon({
        className: 'icon',
        html
      }),
      riseOnHover: true
    });
  }

const geoJsonLayers = new L.GeoJSON(geoJson, {
  pointToLayer: countryPointToLayer
});

geoJsonLayers.addTo(map)



 
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      </Helmet>

      <Map {... mapSettings} >
      </Map>

      <Container type="content" className="text-center home-start">
        <h2><strong>EFFECT OF COVID-19 WORLDWIDE</strong></h2>
        <p><em>The above shown countries have been affected by the Novel Corona Virus</em></p>
        <pre>
          <code>Hover Over the icons to see the confirmed cases, recovery and death poll.</code>
          
        </pre>
        
        <button class="animated infinite heartBeat delay-2s" ><h3>Help Stop Corona Virus</h3></button>
       
        <div className="note">
        
        <img src="https://static01.nyt.com/images/2020/03/22/science/11SCI-VIRUS-CURVE1/11SCI-VIRUS-TRACKER1-superJumbo.jpg" width= "700px" height= "500px" alt="Flatten the curve"></img></div>
       <h4>"Let's practice social distancing to flatten the curve"</h4>
      </Container>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      
    </Layout>
  );
};

export default IndexPage;
