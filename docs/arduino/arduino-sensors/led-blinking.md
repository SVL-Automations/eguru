---
sidebar_label: 'LED Blinking'
sidebar_position: 1
---


# Blinking an LED with Arduino Uno: A Step-by-Step Guide

Blinking an LED is one of the simplest and most common projects for beginners to get started with Arduino. In this guide, we'll walk through the process of setting up and programming an Arduino Uno to blink an LED.

## Components Needed

- **Arduino Uno board**
- **8mm LED (any color)**
- **Breadboard** (optional)
- **Jumper wires**
- **USB cable**

## Circuit Diagram

![Arduino LED Blinking Circuit Diagram](/img/arduino/sensors/arduino-uno-led-blink.png "Arduino LED Blinking Circuit Diagram")

1. **Connect the shorter leg of the LED (cathode) to the ground (GND) on the Arduino Uno.**
2. **Connect the longer leg of the LED (anode) to digital pin 13 on the Arduino Uno.**

## Writing the Code

Open the Arduino IDE and enter the following code:

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```

## Explanation of the Code

- **setup()**: This function is called once when the program starts. It sets pin 13 as an output pin using `pinMode(13, OUTPUT);`.
- **loop()**: This function runs continuously in a loop. Inside this function, `digitalWrite(13, HIGH);` turns the LED on, and `delay(1000);` pauses the program for 1000 milliseconds (1 second). Then, `digitalWrite(13, LOW);` turns the LED off, followed by another `delay(1000);`.

## Uploading the Code

1. **Connect the Arduino Uno to your computer using the USB cable.**
2. **Open the Arduino IDE and select the correct board and port:**
   - Go to `Tools > Board` and select `Arduino Uno`.
   - Go to `Tools > Port` and select the appropriate COM port.
3. **Click the upload button (right arrow) to upload the code to the Arduino Uno.**

Once the code is uploaded, the LED connected to pin 13 will start blinking on and off with a one-second interval.

## Troubleshooting Tips

- **Check Connections**: Ensure all connections are secure and correct as per the circuit diagram.
- **Correct Port**: Verify that the correct COM port is selected in the Arduino IDE.
- **LED Polarity**: Make sure the LED is connected with the correct polarity (longer leg to pin 13, shorter leg to GND).

## Conclusion

Blinking an LED with the Arduino Uno is a foundational project that introduces you to basic electronics and programming concepts. From here, you can expand to more complex projects by adding more LEDs, sensors, and other components.

