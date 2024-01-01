<div style="text-align:center">

![icon](img/icon.png ':size=25%')

</div>

# Pyxelite [(Github)](https://github.com/lochungtin/Pyxelite)

## Background Motivations

The idea came to life when I discovered that the Addressable RGB (ARGB) PC fans require an external adapt in order to support full LED control. I did not want to pay extra just to have customisable lights, but I would also want my system to look a certain way. So, I decided that I would hack them and control them via a microcontroller (MCU). Write and flashing code each time when I want to change colour would be ridiculous, so I made a mobile app to control the MCU as well.

## Mobile App

The app is written in React Native and the **RESTful API** requests are handled by Axios. A custom colour picker is made for users to choose their own accents for the animations. Each colour is saved in the colour library for future use. Animations are precoded and available for selection in the app.

[Pyxelite Mobile App GitHub](https://github.com/lochungtin/Pyxelite) | [Mobile App](./app.md)

### Features

-   Basic Control and Animations
-   Custom Brightness and Motion Speed
-   Custom Colours and Colour Library

## Micro Controller Unit

An ESP32 is used as the **controller and web server**. It is directly connected to the PC fans via its built-in IO port. It also hosts the web server that the phone app connects to. RESTful APIs are used to control the colour, speed, and animation of the LEDs inside the computer fans

[Pyxelite MCU Github](https://github.com/lochungtin/Pyxelite/tree/master/mcu) | [Micro Controller Unit](./mcu.md)

## Limitations and Future Work

Currently, only one colour is support for the entire system. Upcoming versions of the project is to allow **different colours and configurations** for every single ARGB device connected.
