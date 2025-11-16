---
sidebar_label: 'DHT11 sensor interfacing'
sidebar_position: 4
---

# Using a DHT11 Sensor Module with Arduino Uno:A Step-by-Step Guide

The DHT11 sensor module is a popular choice for measuring temperature and humidity. It is widely used in various weather monitoring and home automation projects due to its simplicity and reliability. This guide will walk you through the process of connecting a DHT11 sensor module to an Arduino Uno and writing code to read and utilize the sensor data.

## Components Needed

- **Arduino Uno board**
- **DHT11 sensor module**
- **Breadboard**
- **Jumper wires**
- **USB cable**

## Understanding the DHT11 Sensor Module

<center>
![DHT11 Sensor Module](/img/arduino/sensors/DHT11–Temperature-Sensor.jpg "DHT11 Sensor Module")
</center>

The DHT11 sensor module can measure temperature and humidity. It typically comes with three pins: VCC, GND, and DATA. Here’s a brief description of each pin:

- **VCC**: Power supply pin (3.3V - 5V)
- **GND**: Ground pin
- **DATA**: Data pin (transmits temperature and humidity data)

## Technical Specifications

- **Operating Voltage**: 3.3V to 5V
- **Temperature Range**: 0-50°C (±2°C accuracy)
- **Humidity Range**: 20-90% RH (±5% RH accuracy)
- **Sampling Rate**: 1 Hz (it can provide new data once every second.)
- **Signal Output**: Digital signal via a single-bus interface
- **Dimensions**: 15.5 mm x 12 mm x 5.5 mm

## Working Principle

The DHT11 sensor operates based on the principle of capacitive humidity sensing and thermistor temperature sensing. Here’s a step-by-step explanation of its working:

<center>
![DHT11 Sensor Module](/img/arduino/sensors/DHT11-sensors-and-their-components.jpg "DHT11 Sensor Module")
</center>

### Humidity Measurement

1. **Capacitive Sensing**:
   - The DHT11 contains a moisture-holding substrate between two electrodes to measure humidity.
   - When humidity levels change, the substrate absorbs moisture, causing its capacitance to change.
   - The sensor converts this capacitance change into a digital signal.

### Temperature Measurement

1. **Thermistor Sensing**:
   - The DHT11 uses a thermistor to measure temperature.
   - A thermistor is a type of resistor whose resistance varies significantly with temperature.
   - The sensor measures the resistance and converts it into a digital signal representing the temperature.

### Data Transmission

1. **Digital Output**:
   - The DHT11 sends temperature and humidity data as a digital signal via the DATA pin.
   - Communication with the sensor is done through a single-wire protocol, which requires precise timing.

## Data Transmission Protocol

The DHT11 uses a single-wire digital protocol for communication, which involves the following steps:

1. **Start Signal**:
   - The host (e.g., Arduino) sends a low signal for at least 18 milliseconds to ensure the DHT11 recognizes it as a start signal.
   - After the start signal, the host pulls the line high for 20-40 microseconds.

2. **Response Signal**:
   - The DHT11 responds with a low signal for 80 microseconds, followed by a high signal for another 80 microseconds, indicating it is ready to send data.

3. **Data Transmission**:
   - The DHT11 sends 40 bits of data (16 bits for humidity, 16 bits for temperature, and 8 bits for a checksum).
   - Each bit is transmitted by a low signal for 50 microseconds, followed by a high signal. The duration of the high signal determines if the bit is '0' or '1':
     - **'0' bit**: 26-28 microseconds high signal.
     - **'1' bit**: 70 microseconds high signal.


## Circuit Diagram
<center>
![Arduino DHT11 Sensor Module Circuit Diagram](/img/arduino/sensors/DHT11-Sensor-Module-with-Arduino.png "Arduino DHT11 Sensor Module Circuit Diagram")
</center>
1. **Connect the VCC pin of the DHT11 to the 5V pin on the Arduino Uno.**
2. **Connect the GND pin of the DHT11 to the GND pin on the Arduino Uno.**
3. **Connect the DATA pin of the DHT11 to digital pin 2 on the Arduino Uno.**

## Installing the DHT Library

Before writing the code, you need to install the DHT library. Follow these steps:

1. **Open the Arduino IDE.**
2. **Go to `Sketch > Include Library > Manage Libraries`.**
3. **In the Library Manager, type `DHT` in the search box.**
4. **Find `DHT sensor library by Adafruit` and click `Install`.**

## Writing the Code

Open the Arduino IDE and enter the following code to read temperature and humidity using the DHT11 sensor module:

```c
#include "DHT.h"

#define DHTPIN 2     // Define the pin where the sensor is connected
#define DHTTYPE DHT11   // Define the type of sensor used (DHT11)

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // Start the serial communication
  Serial.begin(9600);
  
  // Initialize the DHT sensor
  dht.begin();
}

void loop() {
  // Wait a few seconds between measurements
  delay(2000);
  
  // Read the humidity
  float humidity = dht.readHumidity();
  
  // Read the temperature in Celsius
  float temperature = dht.readTemperature();
  
  // Check if any readings failed and exit early
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
  // Print the results to the Serial Monitor
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" *C");
}
```

## Explanation of the Code

- **DHTPIN**: Defines the pin connected to the DATA pin of the DHT11.
- **DHTTYPE**: Defines the type of DHT sensor (DHT11).
- **dht**: Creates an instance of the DHT class.
- **setup()**: Initializes the serial communication and the DHT sensor.
- **loop()**: Reads the temperature and humidity values from the sensor and prints them to the Serial Monitor every 2 seconds.

## Uploading the Code

1. **Connect the Arduino Uno to your computer using the USB cable.**
2. **Open the Arduino IDE and select the correct board and port:**
   - Go to `Tools > Board` and select `Arduino Uno`.
   - Go to `Tools > Port` and select the appropriate COM port.
3. **Click the upload button (right arrow) to upload the code to the Arduino Uno.**

Once the code is uploaded, open the Serial Monitor (located in the top-right corner of the Arduino IDE). You should see the temperature and humidity values being printed. These values will update every 2 seconds.

## Applications

### 1. Weather Monitoring

- **Weather Stations**: Use the DHT11 sensor to create a simple weather station that monitors temperature and humidity.
- **Data Logging**: Record temperature and humidity data over time for analysis.

### 2. Home Automation

- **Climate Control**: Integrate the DHT11 sensor into a home automation system to control HVAC systems based on real-time temperature and humidity readings.
- **Smart Gardening**: Use the sensor to monitor environmental conditions in a greenhouse or indoor garden.

### 3. Educational Projects

- **STEM Education**: The DHT11 sensor is a great tool for teaching students about sensor integration, data collection, and environmental science.
- **DIY Projects**: Hobbyists can use the DHT11 in various DIY electronics projects to learn more about sensor technology and data visualization.

## Advantages

- **Simple and Inexpensive**: The DHT11 sensor is easy to use and cost-effective.
- **Combined Measurement**: Measures both temperature and humidity with reasonable accuracy.
- **Wide Range of Applications**: Suitable for various environmental monitoring and control applications.
- **Analog and Digital Output**: The DHT11 provides digital data output, making it easy to interface with microcontrollers.
- **Low Power Consumption**: Suitable for battery-operated devices.
- **Compact Size**: Can be easily integrated into small devices and systems.

## DHT11 vs DHT22
- The DHT22 sensor has a better resolution and a wider temperature and humidity measurement range. However, it is a bit more expensive, and you can only request readings with 2 seconds interval.
- The DHT11 has a smaller range and it’s less accurate. However, you can request sensor readings every second. It’s also a bit cheaper.
- Despite their differences, they work in a similar way, and you can use the same code to read temperature and humidity. You just need to select in the code the sensor type you’re using.

The DHT11 and DHT22 are very similar, but differ in their specifications. The following table compares some of the most important specifications of the DHT11 and DHT22 temperature and humidity sensors. For a more in-depth analysis of these sensors, please check the sensors’ datasheet.
<center>

| **Specifications**    | **DHT11**                    | **DHT22**                        |
| --------------------- | ---------------------------- | -------------------------------- |
| **Temperature range** | 0 to 50 ºC +/-2 ºC           | -40 to 80 ºC +/-0.5ºC            |
| **Humidity range**    | 20 to 90% +/-5%              | 0 to 100% +/-2%                  |
| **Resolution**        | Humidity: 1%Temperature: 1ºC | Humidity: 0.1%Temperature: 0.1ºC |
| **Operating voltage** | 3 – 5.5 V DC                 | 3 – 6 V DC                       |
| **Current supply**    | 0.5 – 2.5 mA                 | 1 – 1.5 mA                       |
| **Sampling period**   | 1 second                     | 2 seconds                        |
| **Price**             | &#8377;50 to &#8377;150    | &#8377;150 to &#8377;250         |
| **Where to buy**      | Check prices                 | Check prices                     |

</center>


## Conclusion

Using a DHT11 sensor module with an Arduino Uno is an excellent way to measure temperature and humidity in various projects. Whether you're building a weather station, a home automation system, or an educational project, understanding how to interface and program the DHT11 sensor is a valuable skill. Experiment with different applications and explore the capabilities of this versatile sensor. Happy coding!

