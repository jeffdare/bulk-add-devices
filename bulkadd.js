var iotf = require('ibmiotf');
var config = require('./config.json');
var devicesToAdd = require('./devices.json')

var appClient = new iotf.IotfApplication(config);

//setting the log level to trace. By default its 'warn'
appClient.log.setLevel('info');

//sample device Request
var devices = devicesToAdd.devices;

// Register Multiple devices
appClient.
registerMultipleDevices(devices). then (function onSuccess (response) {
  //Success callback
	console.log("Success");
	console.log(response);
  console.log("Exiting!!!");
}, function onError (argument) {
  //Failure callback
	console.log("Fail");
	console.log(argument);
  console.log("Exiting!!!");
});
