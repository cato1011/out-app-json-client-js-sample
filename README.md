# JavaScript Sample Client for SIWIAT Out App [JSON](http://siwiat.com/app/view/?appname=json)

## Features

* Provides easy access to [SIWIAT App-Box](http://www.siwiat.com) measurement values
* Full abstraction of the App JSON interface
* Handle channels and values as models

## Requirements

* Node.js
* Tools: GIT, npm

## Usage

### Installation

    git clone https://github.com/siwiat/out-app-json-client-js.git
    npm install
    
## Getting started

Change the host to your SIWIAT App-Box in ```sample.js```:

```javascript
apiClient.basePath = 'http://[IP-OF-YOUR-APP-BOX]/websites/ab/index.php/json/api';
```

Executing the ```sample.js```

    > node sample.js
    
will show the current value of the 0th channel:

    Value the Channel: 42
    Value the Channel: 62

    
## Sample.js explained

In the sample.js you find a simple minimal client. This client

* fetches all channels from the App-Box
* extracts the valueid of the 0th channel
* fetches the measurement value of the 0th channel with this valueid

```javascript
/*
 * Sample Javascript/Node Client to access SIWIAT Out App JSON
 *
 * @license see LICENSE
 * @copyright Copyright (c) 2017, Ondics GmbH
 */
var SiwiatOutAppJson = require('siwiat_out_app___json');

var apiClient = new SiwiatOutAppJson.ApiClient();
apiClient.basePath = 'http://[IP-OF-YOUR-APP-BOX]/websites/ab/index.php/json/api';

var apiChannels = new SiwiatOutAppJson.ChannelsApi(apiClient);
var apiValues = new SiwiatOutAppJson.ValuesApi(apiClient);

// Get valueid of first (0th) channel
var channels_callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        // Get current value with this valueid
        apiValues.getValuesResponse(data.channels[0].valueid, values_callback);
    }
};

var values_callback = function(error, data, response) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(data.values);
       }
};
// Get all channels and then get value of 0th channel
apiChannels.getChannelsResponse(channels_callback);

// Direct call of a known channel with value id 91-1
apiValues.getValuesResponse('91-1', values_callback);
```

## Documentation

For full documentation of this JavaScript Client library see [DOCS](docs)

## Author

Ondics GmbH

## License

Apache License 2.0

For details see [LICENSE](LICENSE)

## Notes
This project was partially funded by the german [BMBF](https://www.bmbf.de/) research project [ScaleIT](http://scale-it.org).

This client was initially generated with [Swagger](http://swagger.io). The world's most popular API Framework.


