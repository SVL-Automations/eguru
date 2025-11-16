---
sidebar_label: 'LDR sensor interfacing'
sidebar_position: 2
---

# Using an LDR Sensor with Arduino Uno: A Step-by-Step Guide

A Light Dependent Resistor (LDR) sensor, also known as a photoresistor, is a sensor that changes its resistance based on the amount of light falling on it. This guide will walk you through the process of connecting an LDR sensor to an Arduino Uno and writing code to read and utilize the sensor data.

## LDR Sensor
- LDR SENSOR is nothing but a light-dependent resistor, its resistance changes according to changes in light intensity. 
- The LDR SENSOR is made of photosensitive material. The zig-zag lines you see on the sensor are nothing but a photosensitive material. 
- When light falls on this material the resistance of the material changes and hence conductivity. This was the original operation of LDR SENSOR.
- A Light Dependent Resistor (LDR) sensor module is a convenient component for detecting light levels in various applications. It is widely used in projects that require light detection, such as automatic lighting systems, light meters, and security systems. 
![LDR Sensor module](/img/arduino/sensors/ldr-light-sensor-module.jpg "LDR Sensor module")

## Technical Specifications

The LDR sensor module typically consists of an LDR, a resistor, and a comparator (like the LM393), assembled on a small PCB. Here are the common technical specifications:

- **Operating Voltage**: 3.3V - 5V
- **Output Type**: Digital (High/Low) and Analog
- **Sensitivity Adjustment**: Potentiometer on the module
- **Dimensions**: Varies by manufacturer, typically around 3 cm x 2 cm

### Pin Configuration

- **VCC**: Power supply pin (3.3V - 5V)
- **GND**: Ground pin
- **DO**: Digital output pin
- **AO**: Analog output pin

## Working Principle

The LDR sensor module operates on the principle that the resistance of the LDR varies with light intensity. In the presence of light, the resistance of the LDR decreases, causing a change in voltage that is detected by the comparator. The comparator then provides a digital output based on a preset threshold, which can be adjusted using the onboard potentiometer.

## Usage
### Components Needed

- **Arduino Uno board**
- **LDR sensor**
- **10k ohm resistor**
- **Breadboard**
- **Jumper wires**
- **USB cable**

## Circuit Diagram

![Arduino LDR Sensor Circuit Diagram](/img/arduino/sensors/LDR-Sensor-Module-Arduino-Connection.jpg "Arduino LDR Sensor Circuit Diagram")


## Writing the Code

Open the Arduino IDE and enter the following code:

```c
// Define the analog pin where the LDR is connected
const int ldrPin = A0;

// Define the digital pin where the LED is connected
const int ledPin = 2;

// Threshold value to determine LED on/off
const int threshold = 500;

void setup() {
  // Set the relay pin as an output
  pinMode(ledPin, OUTPUT);
  pinMode(ldrPin, INPUT);

  // Start the serial communication
  Serial.begin(9600);
}

void loop() {
  // Read the analog value from the LDR sensor
  int ldrValue = analogRead(ldrPin);

  // Print the sensor value to the serial monitor
  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  // Check if the LDR value is above the threshold
  if (ldrValue > threshold) {
    digitalWrite(ledPin, HIGH);  // Turn the relay on
  } else {
    digitalWrite(ledPin, LOW);   // Turn the relay off
  }

  // Delay for a short interval before the next reading
  delay(500);
}

```

## Explanation of the Code

- **ldrPin**: This constant defines the analog pin (A0) where the LDR sensor is connected.
- **ledPin**: This constant defines the digital pin (2) where the led is connected.
- **ldrValue**: This variable stores the value read from the LDR sensor.
- **setup()**: Initializes the serial communication at a baud rate of 9600.
- **loop()**: Continuously reads the value from the LDR sensor using `analogRead(ldrPin)`, prints the value to the serial monitor, and then waits for 500 milliseconds before repeating.

## Uploading the Code

1. **Connect the Arduino Uno to your computer using the USB cable.**
2. **Open the Arduino IDE and select the correct board and port:**
   - Go to `Tools > Board` and select `Arduino Uno`.
   - Go to `Tools > Port` and select the appropriate COM port.
3. **Click the upload button (right arrow) to upload the code to the Arduino Uno.**

Once the code is uploaded, open the serial monitor (located in the top-right corner of the Arduino IDE). You should see the LDR values being printed. These values will change based on the amount of light falling on the LDR sensor.

## Applications

### 1. Light Meter

Use the LDR sensor to create a simple light meter that displays light levels on the serial monitor.

### 2. Automatic Lighting System

Combine the LDR sensor with an LED or relay to create an automatic lighting system that turns on lights when it gets dark.

### 3. Light-activated Alarms

Design a light-activated alarm system that triggers an alarm when the light level falls below a certain threshold.

## Advantages

- **Simple and Inexpensive**: LDR sensors are easy to use and cost-effective.
- **Analog Output**: Provides a wide range of values based on light intensity.
- **Versatile Applications**: Suitable for various applications including light detection, automatic lighting, and security systems.

## Characteristics

- **Sensitivity to Light**: Resistance decreases with increasing light intensity.
- **Analog Sensor**: Outputs a range of values that can be read by the Arduino's analog input pins.
- **Easy to Interface**: Simple to connect and integrate with Arduino projects.

## Conclusion

Using an LDR sensor with an Arduino Uno opens up numerous possibilities for light-based projects. Whether you're creating a light meter, an automatic lighting system, or a security device, understanding how to interface and program the LDR sensor is a valuable skill. Experiment with different projects and explore the capabilities of this versatile sensor. Happy coding!

