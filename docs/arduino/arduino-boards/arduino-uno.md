---
sidebar_label: 'Arduino Uno'
sidebar_position: 6
---

# Arduino Uno

The **Arduino UNO R3** is frequently used microcontroller board in the family of an Arduino. This is the latest third version of an Arduino board and released in the year 2011. The main advantage of this board is if we make a mistake we can change the microcontroller on the board. The main features of this board mainly include, it is available in DIP (dual-inline-package), detachable and ATmega328 microcontroller. The programming of this board can easily be loaded by using an Arduino computer program. This board has huge support from the Arduino community, which will make a very simple way to start working in embedded electronics, and many more applications. 

![Arduino Uno](/img/arduino/arduino-uno.png "Arduino Uno")

:::tip[Info]

UNO means "**one**" in Italian.

:::
___

## Intorduction to Arduino Uno

Uno is a microcontroller board based on 8-bit ATmega328P microcontroller. Along with ATmega328P, it consists other components such as crystal oscillator, serial communication, voltage regulator, etc. to support the microcontroller.

The Arduino Uno comes with USB interface, 6 analog input pins, 14 I/O digital ports that are used to connect with external electronic circuits. Out of 14 I/O ports, 6 pins can be used for PWM output. It allows the designers to control and sense the external electronic devices in the real world.

## Arduino Uno Pinout

![Arduino Uno](/img/arduino/arduino-uno-labeled.jpg "Arduino Uno")

- **ATmega328 Microcontroller**:  It is a single chip Microcontroller of the ATmel family. The processor code inside it is of **8-bit**. It combines **Memory (SRAM, EEPROM, and Flash), Analog to Digital Converter, SPI serial ports, I/O lines, registers, timer, external and internal interrupts, and oscillator.**
- **ICSP pin** :  The In-Circuit Serial Programming pin allows the user to program using the firmware of the Arduino board.
- **Power LED Indicator**:  The ON status of LED shows the power is activated. When the power is OFF, the LED will not light up.
- **Digital I/O pins**:  The digital pins have the value HIGH or LOW. The pins numbered from D0 to D13 are digital pins.
- **TX and RX LED's**:  The successful flow of data is represented by the lighting of these LED's.
- **AREF-** The Analog Reference (AREF) pin is used to feed a reference voltage to the Arduino UNO board from the external power supply.
- **Reset button**:  It is used to Resets the microcontroller.
- **USB**:  It allows the board to connect to the computer. It is essential for the programming of the Arduino UNO board.
- **Crystal Oscillator**:  The Crystal oscillator has a frequency of 16MHz, which makes the Arduino UNO a powerful board.
- **Voltage Regulator**:  The voltage regulator converts the input voltage to 5V.
- **5V** :  This board comes with the ability to provide voltage regulation. 5V pin is used to provide output regulated voltage. The board is powered up using three ways i.e. USB, Vin pin of the board or DC power jack.
- **GND**: 3 Ground pins are avilable on board. The ground pin acts as a pin with zero voltage.
- **Vin**:  It is the input voltage provided to the Arduino Board. It is different than 5 V supplied through a USB port. This pin is used to supply voltage. If a voltage is provided through a power jack, it can be accessed through this pin.
- **Analog Pins**:  The pins numbered from A0 to A5 are analog pins. The function of Analog pins is to read the analog sensor used in the connection. It can also act as GPIO (General Purpose Input Output) pins.


| Specifications            | Details                                      |
| ------------------------- | -------------------------------------------- |
| Microcontroller           | ATmega38P – 8 bit AVR family microcontroller |
| Operating Voltage         | 5V                                           |
| Recommended Input Voltage | 7-12V                                        |
| Input Voltage Limits      | 6-20V                                        |
| Analog Input Pins         | 6 (A0-A5)                                    |
| Digital I/O Pins          | 14 (Out of which 6 provide PWM output)       |
| PWM Pins                  | 6 (3,5,6,9,10,11 pins)                       |
| DC Current on I/O Pins    | 40mA                                         |
| DC Current on 3.3V Pin    | 50mA                                         |
| Flash Memory              | 32 KB (0.5 KB is used for Bootloader)        |
| SRAM                      | 2kB                                          |
| EEPROM&nbsp;              | 1kB                                          |
| Frequency (Clock Speed)   | 16MHz                                        |
| Communication protocols   | Serial, I2C, SPI                             |


## Technical Specifications of Arduino Uno 

![Arduino Uno](/img/arduino/High-Res-Arduino-UNO-Pinout.jpg "Arduino Uno")



The specifications of Arduino Uno as follow.

| **Pin Category**        | **Pin Name**                               | **Details**                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Power**               | Vin, 3.3V, 5V, GND                         | Vin: Input voltage to Arduino when using an external power source.5V: Regulated power supply used to power microcontroller and other components on the board.3.3V: 3.3V supply generated by on-board voltage regulator. Maximum current draw is 50mA.GND: ground pins. |
| **Reset**               | Reset                                      | Resets the microcontroller.                                                                                                                                                                                                                                            |
| **Analog Pins**         | A0-A5                                      | Used to provide analog input in the range of 0-5V                                                                                                                                                                                                                      |
| **Input/Output Pins**   | Input/Output Pins                          | Can be used as input or output pins.                                                                                                                                                                                                                                   |
| **Serial**              | 0(Rx), 1(Tx)                               | Used to receive and transmit TTL serial data.                                                                                                                                                                                                                          |
| **External Interrupts** | 2, 3                                       | To trigger an interrupt.                                                                                                                                                                                                                                               |
| **PWM**                 | 3, 5, 6, 9, 11                             | Provides 8-bit PWM output.                                                                                                                                                                                                                                             |
| **SPI**                 | 10 (SS), 11 (MOSI), 12 (MISO) and 13 (SCK) | Used for SPI communication.                                                                                                                                                                                                                                            |
| **Inbuilt LED**         | 13                                         | To turn on the inbuilt LED.                                                                                                                                                                                                                                            |
| **TWI**                 | A4 (SDA), A5 (SCA)                         | Used for TWI communication.                                                                                                                                                                                                                                            |
| **AREF**                | Analogue REFerence                         | To provide reference voltage for input voltage.                                                                                                                                                                                                                        |

## Features of Arduino Uno 
This board comes with all the features required to run the controller and can be directly connected to the computer through USB cable that is used to transfer the code to the controller using IDE (Integrated Development Environment) software, mainly developed to program Arduino. 

- ***More frequency*** : **Atmega328** microcontroller is placed on the board that comes with a number of features like timers, counters, interrupts, PWM, CPU, I/O pins and based on a **16MHz clock** that helps in producing more frequency and number of instructions/cycle.
- ***Built-in regulation***: This board comes with a built-in regulation feature which keeps the voltage under control when the device is connected to the external device.
- ***Flexibility & Ease of use***: There are **14 I/O digital and 6 analog pins** incorporated in the board that allows the external connection with any circuit with the board. These pins provide the flexibility and ease of use to the external devices that can be connected through these pins.
- ***Configurable pins***: The 6 analog pins are marked as A0 to A5 and come with a resolution of 10bits. These pins measure from 0 to 5V, however, they can be configured to the high range using analogReference() function and AREF pin.
- ***Quick Start***: Reset pin is available in the board that reset the whole board and takes the running program in the initial stage. This pin is useful when board hangs up in the middle of the running program; pushing this pin will clear everything up in the program and starts the program right from the beginning.
- ***Greater Flash Memory***: **13KB of flash memory** is used to store the number of instructions in the form of code.
- ***Low Voltage Requirement***: Only **5V** is required to turn the board on, which can be achieved directly using USB port or external adapter, however, it can support external power source up to 12 V which can be regulated and limit to 5 V or 3.3 V based on the requirement of the project.
- ***Plug & Play***: There is no hard and fast interface required to connect the devices to the board. Simply plug the external device into the pins of the board that are laid out on the board in the form of the header.
- ***USB interface***: Arduino Uno comes with USB interface i.e. USB port is added on the board to develop serial communication with the computer.
- ***Power alternatives***: Apart from USB, battery or AC to DC adopter can also be used to power the board.
- ***More Storage***: There is a provision of Mirco SD card to be used in the boards to make them store more information.

## Applications Of Arduino UNO

- #### Prototyping and Education
Arduino is extensively used in educational institutions for teaching electronics and programming. It's also a favorite among hobbyists for prototyping new ideas quickly and efficiently.

- #### Robotics
With its extensive I/O capabilities and ease of interfacing with various sensors and actuators, Arduino is a popular choice for building robots.

- #### Home Automation
Arduino boards can be used to automate household tasks such as controlling lights, thermostats, and security systems.

- #### Internet of Things (IoT)
With models like the Arduino MKR WiFi 1010, integrating your project with the internet becomes straightforward, making it suitable for IoT applications like remote sensing and control.

- #### Wearable Technology
The small form factor of boards like the Arduino Nano makes them ideal for wearable technology projects, including fitness trackers and smart clothing.

## Conclusion
Arduino is a powerful platform for anyone interested in electronics, programming, and prototyping. Its open-source nature, user-friendly interface, and extensive community support make it an excellent choice for both beginners and experienced developers. Whether you're looking to automate your home, build a robot, or develop an IoT application, there's an Arduino board suited for your project. 