
'use strict';

var AWSXRay = require('aws-xray-sdk-core')


// To allow Cross-origin resource sharing
const headers = {
    'Access-Control-Allow-Origin': '*',
};

exports.handler = async (event) => {

console.log(":::--->event.token: ", event.token)

var request = require('request');

var options = {
 'method': 'POST',
 'url': 'https://test.common.nodalblock.com/dev/js/open-connection',
 'headers': {
 'Api-Key': 'd5735a26-23c4-44f3-8d45-82d2f05f4277'
 },
 formData: {
 'userIp': '201.157.55.68',
 'uniqid': 'agile001',
 'callback': 'https://develop.d2338pcgca4grp.amplifyapp.com/test',
 'tokenFrom': event.token
 }
 };


return new Promise( ( resolve, reject ) => {

        request(options, function (error, response) {
        console.log(error)
	if (error) {
            const response = {
                messageID: 419,
                messageReason: "Error" + error,
                headers
            }
            resolve(response)
        }
	else {
            const response = {
                messageID: 200,
                messageReason: response.body,
                headers
            }
            resolve(response)
	}

       })
    })
}

