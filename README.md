bulk-add-devices
===================

This is a tool written in Node.js to add multiple devices to [Watson IoT](http://internetofthings.ibmcloud.com/).

**Steps**

1. `npm install`
2. Edit *config.json*. Add your organization API-KEY and auth-token
3. Edit *devices.json* to add the list of your multiple devices that has to be registered.
4. Run the following command to run the script
5.  `node bulkadd.js`

**config.json**

Configuration file containing your organization credentials

    {
      "org": "orgid",
      "id": "myAppliationId",
      "auth-key": "api-key",
      "auth-token": "auth-token"
    }

**devices.json**

Array containing your list of devices to be registered

    {
      "devices" : [
        {
          "typeId": "temp",
          "deviceId": "device01",
          "authToken": "qwertyu1234"
        },
        {
          "typeId": "temp",
          "deviceId": "device02",
          "authToken": "qwertyu1234"
        }
      ]
    }
