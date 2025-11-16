---
sidebar_label: 'Arduino Nano'
sidebar_position: 7
---


# Arduino nano 

The **Arduino Nano** is a small Arduino board based on ATmega328P or ATmega628 Microcontroller. The connectivity is the same as the Arduino UNO board. It is fairly similar to Arduino Uno board but when it comes to pin-configuration and features, this nano board has replaced Arduino Uno due to small in size. As we know that while designing an embedded system small size components are preferred.

The Nano board is defined as a sustainable, small, consistent, and flexible microcontroller board. It is small in size compared to the UNO board. The Arduino Nano is organized using the Arduino (IDE), which can run on various platforms. 

<img src="/img/arduino/arduino-nano.png" alt="Arduino Nano" width="550" height="400"/>

## Introduction to Arduino nano 

**Arduino Nano** is a small, complete, flexible and breadboard-friendly Microcontroller board, based on ATmega328p, developed by Arduino.cc in Italy in 2008 and contains 30 male I/O headers, configured in a DIP30 style. It is a small size board and also flexible with a wide variety of applications. 

This board has many functions and features like an Arduino Uno board. It doesn’t have any **DC jack** so that the power supply can be given using a small USB port otherwise straightly connected to the pins like VCC & GND. 

Arduino Nano Pinout contains **14 digital** pins, **8 analog** Pins, **2 Reset** Pins & **6 Power** Pins.

## Pinout of Arduino nano 
![Arduino nano](/img/arduino/arduino-nano-pinout-1.jpg "Arduino nano")

The Arduino Nano offers similar functionality to the Arduino Uno but in a much smaller form factor. Here are the detailed technical specifications of the Arduino Nano:

- **Microcontroller**: ATmega328P
- **Operating Voltage**: 5V
- **Input Voltage (recommended)**: 7-12V
- **Input Voltage (limits)**: 6-20V
- **Digital I/O Pins**: 14 (of which 6 provide PWM output)
- **Analog Input Pins**: 8
- **DC Current per I/O Pin**: 40 mA
- **Flash Memory**: 32 KB (ATmega328P) of which 2 KB is used by bootloader
- **SRAM**: 2 KB (ATmega328P)
- **EEPROM**: 1 KB (ATmega328P)
- **Clock Speed**: 16 MHz
- **USB Connector**: Mini USB
- **Dimensions**: 45 mm x 18 mm
- **Weight**: 7 g

## Pin Configuration of Arduino Nano

- **Digital I/O Pins**: 14 (pins D0-D13)
- **Analog Input Pins**: 8 (pins A0-A7)
- **PWM Output Pins**: 6 (pins D3, D5, D6, D9, D10, D11)
- **SPI Pins**: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)
- **I2C Pins**: A4 (SDA), A5 (SCL)
- **UART Pins**: D0 (RX), D1 (TX)


![Arduino nano](/img/arduino/arduino-nano-pinout-2.jpg "Arduino nano")

## How to Power Arduino Nano?
- **Mini USB**: Smaller than standard USB and larger than micro USB, the Mini USB powers the Nano board. It also enables connection to a computer for programming purposes.

- **Vin**: This modulated DC supply voltage regulates the ICs in the circuit. Often referred to as the primary voltage for ICs on the Arduino board, Vcc voltage values can be either negative or positive relative to the GND pin.

## Difference between Arduino UNO and Arduino Nano

- The Arduino Nano board is similar to an Arduino UNO board including similar microcontroller like Atmega328p. Thus they can share a similar program. 
- The main difference between these two is the size. Because Arduino Uno size is double to nano board. So Uno boards use more space on the system. 
- The programming of UNO can be done with a USB cable whereas Nano uses the mini USB cable. 
- Nano board comes with two extra analog pins i.e. 8 pins as compared to 6 analog pins in the Uno board. 
- Nano board is breadboard friendly while Uno board lacks this property.


| Feature               | Arduino Uno       | Arduino Nano  |
| --------------------- | ----------------- | ------------- |
| **Microcontroller**   | ATmega328P        | ATmega328P    |
| **Operating Voltage** | 5V                | 5V            |
| **Input Voltage**     | 7-12V             | 7-12V         |
| **Digital I/O Pins**  | 14 (6 PWM)        | 14 (6 PWM)    |
| **Analog Input Pins** | **6**             | ** 8**        |
| **PWM Output Pins**   | 6                 | 6             |
| **Flash Memory**      | 32 KB             | 32 KB         |
| **SRAM**              | 2 KB              | 2 KB          |
| **EEPROM**            | 1 KB              | 1 KB          |
| **Clock Speed**       | 16 MHz            | 16 MHz        |
| **USB Connector**     | **USB Type-B**    | **Mini USB**  |
| **Dimensions**        | 68.6 mm x 53.4 mm | 45 mm x 18 mm |
| **Built-in LED Pin**  | 13                | 13            |
| **ICSP Header**       | Yes               | Yes           |
| **Price**             | **Moderate**      | **Lower**     |


## Advantages of Arduino Nano

- #### Compact Size

    The small form factor of the Arduino Nano allows it to be used in space-constrained applications where larger boards like the Arduino Uno would not fit.

- #### Breadboard-Friendly

    Its pin layout and size make it easy to integrate with breadboards, which is excellent for prototyping and testing circuits.

- #### Cost-Effective

    The Arduino Nano is relatively inexpensive, making it a cost-effective choice for many projects.

- #### Wide Community Support

    As part of the Arduino ecosystem, it benefits from extensive community support, tutorials, and libraries.


## Applications of Arduino Nano
Arduino Nano is a very useful device that comes with a wide range of applications and covers less space as compared to other Arduino boards. Breadboard-friendly nature makes it stand out from other boards.
- Engineering Students' Projects.
- Samples of electronic systems & products
- Medical Instruments
- Industrial Automation
- Android Applications
- GSM Based Projects
- Embedded Systems
- Automation and Robotics
- Home Automation and Defense Systems
- Virtual Reality Applications
- Control Systems

## Usage

### Setting Up the Arduino Nano

1. **Install Arduino IDE**: Download and install the Arduino IDE from the [Arduino website](https://www.arduino.cc/en/software).
2. **Connect the Board**: Use a Mini USB cable to connect the Arduino Nano to your computer.
3. **Select the Board and Port**:
   - Go to `Tools > Board` and select `Arduino Nano`.
   - Go to `Tools > Port` and select the appropriate COM port.

### Writing and Uploading Code

1. **Open the Arduino IDE**.
2. **Write Your Code**: Here’s an example sketch to blink an LED connected to pin 13:
    ```c
    void setup() {
      pinMode(13, OUTPUT);
    }

    void loop() {
      digitalWrite(13, HIGH);
      delay(1000);
      digitalWrite(13, LOW);
      delay(1000);
    }
    ```
3. **Upload the Sketch**: Click the upload button to compile and transfer the code to the Arduino Nano.


## Conclusion
The **Arduino Nano** is a powerful and versatile microcontroller board suitable for a wide range of applications. Its compact size, extensive features, and ease of use make it an excellent choice for beginners and professionals alike. Whether you're building a wearable device, a home automation system, or a small robot, the Arduino Nano offers the flexibility and functionality you need.

Nano board is extremely suggested to go for this board due to its features like low cost and very simple to use in different applications. This board can simply connect to any computer throughout its **mini USB port**.