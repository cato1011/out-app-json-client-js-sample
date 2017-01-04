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
        console.log('Value of the channel: ' + data.values[0].value);
       }
};
// Get all channels and then get values of 0th channel
apiChannels.getChannelsResponse(channels_callback);

// Direct call of a known channel with value id 91-1
apiValues.getValuesResponse('91-1', values_callback);