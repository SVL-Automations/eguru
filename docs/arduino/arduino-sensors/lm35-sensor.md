---
sidebar_label: 'LM35 sensor interfacing'
sidebar_position: 5
---


# Using an LM35 Sensor Module with Arduino Uno: A Step-by-Step Guide

The LM35 is a precision integrated-circuit temperature sensor whose output voltage is linearly proportional to the Celsius temperature. It is a popular choice for temperature measurement in various applications due to its accuracy and simplicity. This guide will walk you through the process of connecting an LM35 sensor module to an Arduino Uno and writing code to read and utilize the sensor data.

## Components Needed

- **Arduino Uno board**
- **LM35 temperature sensor module**
- **Breadboard**
- **Jumper wires**
- **USB cable**

## Understanding the LM35 Sensor Module

The LM35 sensor module measures temperature in degrees Celsius and provides an analog voltage output that is directly proportional to the temperature. Here’s a brief description of its pins:

<center>
![LM35 Sensor Module](/img/arduino/sensors/LM35-sensor.jpg "LM35 Sensor Module")
</center>


- **VCC**: Power supply pin (4V - 30V)
- **GND**: Ground pin
- **OUT**: Analog output pin (provides a voltage proportional to the temperature)

## Technical Specifications

- **Operating Voltage**: 4V to 30V
- **Temperature Range**: -55°C to 150°C
- **Accuracy**: ±0.5°C (at 25°C)
- **Output Voltage**: 10 mV/°C
- **Response Time**: 60 microseconds
- **Dimensions**: 4.5 mm x 4.5 mm x 19 mm (for the sensor itself)

## Circuit Diagram

<center>
![Arduino LM35 Sensor Module Circuit Diagram](/img/arduino/sensors/LM35-circuit.jpg "Arduino LM35 Sensor Module Circuit Diagram")
</center>

1. **Connect the VCC pin of the LM35 to the 5V pin on the Arduino Uno.**
2. **Connect the GND pin of the LM35 to the GND pin on the Arduino Uno.**
3. **Connect the OUT pin of the LM35 to the analog pin A0 on the Arduino Uno.**

## Writing the Code

Open the Arduino IDE and enter the following code to read temperature using the LM35 sensor module:

```c
const int sensorPin = A0; // Define the analog pin where the sensor is connected
float temperature; // Variable to store the temperature value

void setup() {
  // Start the serial communication
  Serial.begin(9600);
}

void loop() {
  // Read the analog value from the sensor
  int sensorValue = analogRead(sensorPin);
  
  // Convert the analog value to voltage
  float voltage = sensorValue * (5.0 / 1023.0);
  
  // Convert the voltage to temperature in Celsius
  temperature = voltage * 100;
  
  // Print the temperature to the Serial Monitor
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");
  
  // Wait for 1 second before the next measurement
  delay(1000);
}
```

## Explanation of the Code

- **sensorPin**: Defines the analog pin connected to the OUT pin of the LM35.
- **temperature**: Variable to store the calculated temperature value.
- **setup()**: Initializes the serial communication.
- **loop()**: Reads the analog value from the sensor, converts it to voltage, then to temperature in Celsius, and prints it to the Serial Monitor every second.

## Uploading the Code

1. **Connect the Arduino Uno to your computer using the USB cable.**
2. **Open the Arduino IDE and select the correct board and port:**
   - Go to `Tools > Board` and select `Arduino Uno`.
   - Go to `Tools > Port` and select the appropriate COM port.
3. **Click the upload button (right arrow) to upload the code to the Arduino Uno.**

Once the code is uploaded, open the Serial Monitor (located in the top-right corner of the Arduino IDE). You should see the temperature values being printed. These values will update every second.

## Applications

### 1. Weather Monitoring

- **Weather Stations**: Use the LM35 sensor to create a simple weather station that monitors temperature.
- **Data Logging**: Record temperature data over time for analysis.

### 2. Home Automation

- **Climate Control**: Integrate the LM35 sensor into a home automation system to control HVAC systems based on real-time temperature readings.
- **Smart Gardening**: Use the sensor to monitor environmental conditions in a greenhouse or indoor garden.

### 3. Educational Projects

- **STEM Education**: The LM35 sensor is a great tool for teaching students about sensor integration, data collection, and environmental science.
- **DIY Projects**: Hobbyists can use the LM35 in various DIY electronics projects to learn more about sensor technology and data visualization.

## Advantages

- **High Accuracy**: Provides accurate temperature measurements with a small margin of error.
- **Linear Output**: The output voltage is linearly proportional to the temperature in Celsius.
- **Wide Operating Voltage Range**: Can operate with a wide range of power supplies.
- **Analog Output**: Provides an analog voltage output that is easy to interface with microcontrollers.
- **Low Power Consumption**: Suitable for battery-operated devices.
- **Compact Size**: Can be easily integrated into small devices and systems.

## Conclusion

Using an LM35 sensor module with an Arduino Uno is an excellent way to measure temperature in various projects. Whether you're building a weather station, a home automation system, or an educational project, understanding how to interface and program the LM35 sensor is a valuable skill. Experiment with different applications and explore the capabilities of this versatile sensor.

