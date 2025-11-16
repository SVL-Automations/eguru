---
sidebar_label: 'Ultrasonic(HC-SR04) sensor interfacing'
sidebar_position: 3
---

# Measuring Distance with Arduino and Ultrasonic Sensor: A Step-by-Step Guide

**Ultrasonic sensors HC-SR04** are commonly used for distance measurement in various applications such as robotics, automation, and security systems. This guide will walk you through the process of connecting an ultrasonic sensor to an Arduino Uno and writing code to measure distance accurately. HC-SR04 Ultrasonic Distance Sensor that can report the range of objects up to **13 feet** away.

:::info[What is Ultrasound?]
Ultrasound is a high-pitched sound wave whose frequency exceeds the audible range of human hearing.  
Humans can hear sound waves that vibrate in the range of about 20 times a second (a deep rumbling noise) to 20,000 times a second (a high-pitched whistle). However, ultrasound has a frequency of more than 20,000 Hz and is therefore inaudible to humans.
<center>
![Ultrasonic Frequency Range Spectrum](/img/arduino/sensors/Ultrasonic-Frequency-Range-Spectrum.png "Ultrasonic Frequency Range Spectrum")
</center>
:::

## Components Needed

- **Arduino Uno board**
- **Ultrasonic sensor (HC-SR04)**
- **Breadboard** (Optional)
- **Jumper wires**
- **USB cable**

## Understanding the HC-SR04 Ultrasonic Sensor

The HC-SR04 sensor uses sonar to determine the distance to an object. It has four pins: VCC, GND, TRIG (trigger), and ECHO. Here’s a brief description of each pin:
<center>
![Ultrasonic-Sensor](/img/arduino/sensors/Ultrasonic-Sensor.jpg "Ultrasonic-Sensor")
</center>
- **VCC**: VCC supplies power to the HC-SR04 ultrasonic sensor. You can connect it to the 5V output from your Arduino.
- **GND**: Ground pin, connect it to the ground of the Arduino.
- **TRIG**: Trigger pin (sends the ultrasound signal). By setting this pin to HIGH for 10µs, the sensor initiates an ultrasonic burst.
- **ECHO**: Echo pin (receives the reflected signal). Echo pin goes high when the ultrasonic burst is transmitted and remains high until the sensor receives an echo, after which it goes low. By measuring the time the Echo pin stays high, the distance can be calculated.

An HC-SR04 ultrasonic distance sensor actually consists of two ultrasonic transducers.

- One acts as a transmitter that converts the electrical signal into 40 KHz ultrasonic sound pulses. The other acts as a receiver and listens for the transmitted pulses.
- When the receiver receives these pulses, it produces an output pulse whose width is proportional to the distance of the object in front.
- This sensor provides excellent non-contact range detection between 2 cm to 400 cm (~13 feet) with an accuracy of 3 mm.
- Since it operates on 5 volts, it can be connected directly to an Arduino or any other 5V logic microcontroller.

## Working Principle

The HC-SR04 sensor works on the principle of echolocation, similar to how **bats and dolphins** navigate. It consists of two main components: a transmitter (TRIG) that emits ultrasonic waves and a receiver (ECHO) that detects these waves when they bounce back from an object. Here's a step-by-step explanation of its working:

1. **Trigger Pulse**: 
   - A short 10-microsecond pulse is sent to the TRIG pin to start the measurement process.
   - This pulse triggers the transmitter to send out an 8-cycle burst of ultrasonic waves at 40 kHz.
<center>
![Ultrasonic-Sensor](/img/arduino/sensors/HC-SR04-Ultrasonic-Sensor-Working-Echo-when-no-Obstacle.gif "Ultrasonic-Sensor")
</center>

2. **Echo Detection**:
   - The ultrasonic waves travel through the air until they hit an object and reflect back to the sensor.
   - The ECHO pin goes high as soon as the transmitted waves are sent and goes low when the reflected waves are received.
<center>
![Ultrasonic-Sensor](/img/arduino/sensors/HC-SR04-Ultrasonic-Sensor-Working-Echo-reflected-from-Obstacle.gif "Ultrasonic-Sensor")
</center>

3. **Time Calculation**:
   - The time duration between sending the pulse and receiving the echo is measured.
   - This time duration is proportional to the distance of the object from the sensor.

4. **Distance Calculation**:
   - The distance is calculated using the formula:
     **[
     Distance = Time Duration * Speed of Sound / 2
     ]**
   - The speed of sound in air is approximately 343 meters per second (0.034 cm/μs).
:::tip[Distance Calulation] 
- **distance = (traveltime/2) x speed of sound**  
- The speed of sound is: 343m/s = 0.0343 cm/uS = 1/29.1 cm/uS  
- Or in inches: 13503.9in/s = 0.0135in/uS = 1/74in/uS
:::

## Technical specification

- **Operating Voltage** :	DC 5V
- **Operating Current** :	15mA
- **Operating Frequency** :	40KHz
- **Max Range** :	4m
- **Min Range** :	2cm
- **Ranging Accuracy** :	3mm
- **Measuring Angle** :	15 degree
- **Trigger Input Signal** :	10µS TTL pulse

## Circuit Diagram

<center>
![Arduino Ultrasonic Sensor Circuit Diagram](/img/arduino/sensors/ultrasonic-sensor-with-arduino-hc-sr04.png "Arduino Ultrasonic Sensor Circuit Diagram")
</center>


1. **Connect the VCC pin of the HC-SR04 to the 5V pin on the Arduino Uno.**
2. **Connect the GND pin of the HC-SR04 to the GND pin on the Arduino Uno.**
3. **Connect the TRIG pin of the HC-SR04 to digital pin 9 on the Arduino Uno.**
4. **Connect the ECHO pin of the HC-SR04 to digital pin 10 on the Arduino Uno.**

## Writing the Code
### Method 1
Open the Arduino IDE and enter the following code to measure distance using the HC-SR04 ultrasonic sensor:

```c
const int trigPin = 9;
const int echoPin = 10;
long duration;
int distance;

void setup() {
  // Initialize the serial communication
  Serial.begin(9600);
  
  // Set the trigger pin as output
  pinMode(trigPin, OUTPUT);
  
  // Set the echo pin as input
  pinMode(echoPin, INPUT);
}

void loop() {
  // Clear the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Set the trigPin high for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (round trip)
  
  // Print the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // Wait for 500 milliseconds before the next measurement
  delay(500);
}
```

#### Explanation of the Code

- **trigPin and echoPin**: Define the pins connected to the TRIG and ECHO pins of the HC-SR04.
- **duration**: Variable to store the time taken for the pulse to return.
- **distance**: Variable to store the calculated distance.
- **setup()**: Initializes the serial communication and sets the pin modes for TRIG and ECHO.
- **loop()**: Measures the duration of the pulse, calculates the distance, and prints it to the serial monitor.

### Method 2
You can also use the NewPing library. Download the library [here](https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home).

After installing the NewPing library, you can upload the code provided below.

```c
// Include NewPing Library
#include "NewPing.h"

// Hook up HC-SR04 with Trig to Arduino Pin 9, Echo to Arduino pin 10
#define TRIGGER_PIN 9
#define ECHO_PIN 10

// Maximum distance we want to ping for (in centimeters).
#define MAX_DISTANCE 400	

// NewPing setup of pins and maximum distance.
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
	Serial.begin(9600);
}

void loop() {
	Serial.print("Distance = ");
	Serial.print(sonar.ping_cm());      //Get distance in cm
	Serial.println(" cm");

    Serial.print("Distance = ");
	Serial.print(sonar.ping_in());      //Get distance in inch
	Serial.println(" inch");
	delay(500);
}

```

## Uploading the Code

1. **Connect the Arduino Uno to your computer using the USB cable.**
2. **Open the Arduino IDE and select the correct board and port:**
   - Go to `Tools > Board` and select `Arduino Uno`.
   - Go to `Tools > Port` and select the appropriate COM port.
3. **Click the upload button (right arrow) to upload the code to the Arduino Uno.**

Once the code is uploaded, open the serial monitor (located in the top-right corner of the Arduino IDE). You should see the distance values being printed. These values will change based on the distance of an object from the sensor.

## Applications

### 1. Robotics

- **Obstacle Avoidance**: Use the ultrasonic sensor to detect obstacles and navigate around them.
- **Distance Measurement**: Measure the distance between the robot and various objects for precise movements.

### 2. Automation

- **Parking Sensors**: Implement the ultrasonic sensor in vehicles to assist with parking.
- **Level Detection**: Use the sensor to detect the level of liquids or solids in a container.

### 3. Security Systems

- **Intrusion Detection**: Create an intrusion detection system that triggers an alarm when an object is detected within a specified range.

## Advantages
- **Non-contact Measurement**: Measures distance without any physical contact.
- **High Precision**: Provides accurate distance measurements.
- **Easy Integration**: Simple to connect and program with Arduino.
- **Range**: Typically measures distances from 2 cm to 400 cm.
- **Resolution**: High resolution with a margin of error around 3 mm.
- **Speed**: Fast response time, making it suitable for real-time applications.

## Limitations of HC-SR04
The following some of the limitations of the HC-SR04:
- The distance between the sensor and the object/obstacle is greater than 13 feet.
- The object is too small to reflect enough sound back to the sensor. Also, if your HC-SR04 sensor is mounted low on your device, you are likely to get sound reflecting off the floor.
- The object has its reflective surface at a shallow angle so that the sound is not reflected back to the sensor.
- Some objects with soft, irregular surfaces (such as stuffed animals) absorb sound rather than reflect it, so the HC-SR04 sensor may find it difficult to detect such objects.

## Conclusion

Using an ultrasonic sensor with an Arduino Uno allows you to measure distance accurately and reliably. Whether you're working on a robotics project, an automation system, or a security device, understanding how to interface and program the HC-SR04 sensor is a valuable skill. Experiment with different applications and explore the potential of this versatile sensor. Happy coding!

```