var APP_DATA = {
  "scenes": [
    {
      "id": "0-info-point",
      "name": "Info Point",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.0656168600441305,
        "pitch": 0.19774013176485639,
        "fov": 1.5521195194347879
      },
      "linkHotspots": [
        {
          "yaw": -3.1152038133534212,
          "pitch": 0.08371367551499986,
          "rotation": 6.283185307179586,
          "target": "1-yellow-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.514805012124935,
          "pitch": 0.01384685308796918,
          "title": "Our Covid Measures",
          "text": "Body text here (I assume we could add links/media via HTML?)<li><a href=\"https://example.com\">Website</a></li><li><a href=\"mailto:m.bluth@example.com\">Email</a></li><li><a href=\"tel:+123456789\">Phone</a></li>"
        }
      ]
    },
    {
      "id": "1-yellow-room",
      "name": "Yellow Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8028915231637459,
        "pitch": 0.23240292269614216,
        "fov": 1.5521195194347879
      },
      "linkHotspots": [
        {
          "yaw": 2.4570518808155963,
          "pitch": 0.07026119904849892,
          "rotation": 1.5707963267948966,
          "target": "0-info-point"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DDS Tour 2021 00",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
