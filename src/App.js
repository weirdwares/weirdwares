import React from 'react';
import logo from './logo.svg';
import './App.css';

import SmartyStreetsSDK from 'smartystreets-javascript-sdk';

const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usStreet.Lookup;

// for Server-to-server requests, use this code:
// let authId = "720bcd3d-1231-3798-8d81-a54b5dcc861f";
// let authToken = "8ttts7GleZuhKsU7nDlC";
// const credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);

// for client-side requests (browser/mobile), use this code:
let key = "33465703171571661";
const credentials = new SmartyStreetsCore.SharedCredentials(key);

let client = SmartyStreetsCore.buildClient.usStreet(credentials);
// .withLicenses(["us-rooftop-geo-cloud"]);

// Documentation for input fields can be found at:
// https://smartystreets.com/docs/us-street-api#input-fields

let lookup1 = new Lookup();
lookup1.inputId = "24601";  // Optional ID from your system
lookup1.addressee = "John Doe";
lookup1.street = "330 N 100 W";
lookup1.street2 = "closet under the stairs";
lookup1.secondary = "APT 2";
lookup1.urbanization = "";  // Only applies to Puerto Rico addresses
lookup1.city = "Provo";
lookup1.state = "Utah";
lookup1.zipCode = "84601";
lookup1.maxCandidates = 3;
lookup1.match = "invalid"; // "invalid" is the most permissive match,
                           // this will always return at least one result even if the address is invalid.
                           // Refer to the documentation for additional MatchStrategy options.

let lookup2 = new Lookup();
lookup2.street = "1600 Amphitheater Pkwy";
lookup2.lastLine = "Mountainview, CA";
lookup2.maxCandidates = 5;

let lookup3 = new Lookup();
lookup3.inputId = "8675309";
lookup3.street = "1600 Amphitheatre Parkway Mountain View, CA 94043";
lookup3.maxCandidates = 1;

// NOTE: batches are not supported when using SharedCredentials.
let batch = new SmartyStreetsCore.Batch();
batch.add(lookup1);
// batch.add(lookup2);
// batch.add(lookup3);

function handleSuccess(response) {
  response.lookups.map(lookup => console.log(lookup.result));
}

function handleError(response) {
  console.log(response);
}

function App() {
  client.send(batch)
      .then(handleSuccess)
      .catch(handleError);
  //
  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };

  // fetch("https://us-street.api.smartystreets.com/street-address?key=33465703171571661&street=1115 W 1130 N&city=Orem&state=UT&cadidates=10&license=us-standard-cloud", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
