var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-lounge_light",
      "name": "360 Lounge_Light",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4553670045420972,
          "pitch": 0.026100305512755995,
          "rotation": 3.141592653589793,
          "target": "2-360-dining_light"
        },
        {
          "yaw": -0.859993229227797,
          "pitch": 0.019816534235275185,
          "rotation": 0,
          "target": "3-360-kitchen-_light"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360-bedroom",
      "name": "360 BedRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.049498498236238,
          "pitch": 0.03946883577318161,
          "rotation": 0,
          "target": "2-360-dining_light"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360-dining_light",
      "name": "360 Dining_Light",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8139065541765378,
          "pitch": 0.032423141636900965,
          "rotation": 0,
          "target": "0-360-lounge_light"
        },
        {
          "yaw": 0.10301582232671436,
          "pitch": 0.016915384276611434,
          "rotation": 3.141592653589793,
          "target": "3-360-kitchen-_light"
        },
        {
          "yaw": 0.463773559505853,
          "pitch": 0.01858743123202622,
          "rotation": 5.497787143782138,
          "target": "1-360-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360-kitchen-_light",
      "name": "360 Kitchen _Light",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5993159006205975,
          "pitch": 0.06574523340704275,
          "rotation": 1.5707963267948966,
          "target": "2-360-dining_light"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
