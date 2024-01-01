<div style="text-align:center">

![icon](img/icon.png ':size=25%')

</div>

# Micro Controller Unit

## About

ESPyxelite is the micro controller uni section of project Pyxelite. As the name suggests, the MCU selected is a ESP32.

## Web Service Based Controlling

**RESTful** architecture is used to interact with the mobile application. The ESP32 hosts a web server with a few endpoints to connect to, on each _PUT_ request, the internal data of the ESP32 updates, and the LED sequence updates accordingly.

## Limitations and Future Work

Currently, only one colour is support for the entire system. Upcoming versions of the project is to allow **different colours and configurations** for every single ARGB device connected.
