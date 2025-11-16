---
sidebar_label: 'Arduino Boards Comparison'
sidebar_position: 5
---

# Arduino Boards Comparison

:::tip[Arduino]

A wide range of boards is manufactured by [Arduino](https://www.arduino.cc/en/hardware). These have different sizes, different microcontrollers, and different processing capabilities.

:::

## Comparison of Different Arduino Boards

Arduino offers a variety of boards, each designed to cater to different project needs. The table below provides a detailed comparison of some of the most popular Arduino boards, highlighting their key specifications and typical applications.

| Feature                  | Arduino Uno            | Arduino Nano                | Arduino Mega          | Arduino Leonardo                  | Arduino Due                     | Arduino MKR WiFi 1010  | Arduino Pro Mini                   |
| ------------------------ | ---------------------- | --------------------------- | --------------------- | --------------------------------- | ------------------------------- | ---------------------- | ---------------------------------- |
| **Microcontroller**      | ATmega328P             | ATmega328P                  | ATmega2560            | ATmega32u4                        | SAM3X8E ARM                     | SAMD21 Cortex-M0+      | ATmega328P                         |
| **Operating Voltage**    | 5V                     | 5V                          | 5V                    | 5V                                | 3.3V                            | 3.3V                   | 3.3V or 5V                         |
| **Input Voltage**        | 7-12V                  | 7-12V                       | 7-12V                 | 7-12V                             | 7-12V                           | 5V (USB) / 7-12V (VIN) | 3.35-12V (3.3V) / 5-12V (5V)       |
| **Digital I/O Pins**     | 14 (6 PWM)             | 14 (6 PWM)                  | 54 (15 PWM)           | 20 (7 PWM)                        | 54 (12 PWM)                     | 8 (12 PWM)             | 14 (6 PWM)                         |
| **Analog Input Pins**    | 6                      | 8                           | 16                    | 12                                | 12                              | 7                      | 8                                  |
| **Analog Output Pins**   | -                      | -                           | -                     | -                                 | 2 (DAC)                         | -                      | -                                  |
| **Flash Memory**         | 32 KB                  | 32 KB                       | 256 KB                | 32 KB                             | 512 KB                          | 256 KB                 | 32 KB                              |
| **SRAM**                 | 2 KB                   | 2 KB                        | 8 KB                  | 2.5 KB                            | 96 KB                           | 32 KB                  | 2 KB                               |
| **EEPROM**               | 1 KB                   | 1 KB                        | 4 KB                  | 1 KB                              | -                               | -                      | 1 KB                               |
| **Clock Speed**          | 16 MHz                 | 16 MHz                      | 16 MHz                | 16 MHz                            | 84 MHz                          | 48 MHz                 | 8 MHz (3.3V) / 16 MHz (5V)         |
| **Connectivity**         | -                      | -                           | -                     | -                                 | -                               | Wi-Fi, Bluetooth       | -                                  |
| **USB Interface**        | Yes                    | Yes                         | Yes                   | Yes                               | Yes                             | Yes                    | No                                 |
| **Dimensions**           | 68.6 x 53.4 mm         | 45 x 18 mm                  | 101.52 x 53.3 mm      | 68.6 x 53.3 mm                    | 101.52 x 53.3 mm                | 61.5 x 25 mm           | 33 x 18 mm                         |
| **Typical Applications** | Prototyping, Education | Compact Projects, Wearables | Robotics, 3D Printing | HID Devices, Interactive Projects | Advanced Robotics, Data Logging | IoT, Wearable Tech     | Embedded Systems, Portable Devices |


## Summary

Each Arduino board has its own strengths and is suited for different types of projects. Here is a quick summary to help you choose the right board for your needs:

- **Arduino Uno**: Best for beginners and general prototyping.
- **Arduino Nano**: Ideal for compact and portable projects.
- **Arduino Mega**: Suitable for complex projects requiring many I/O pins.
- **Arduino Leonardo**: Great for creating HID devices like custom keyboards and mice.
- **Arduino Due**: Perfect for projects requiring high computational power and speed.
- **Arduino MKR WiFi 1010**: Designed for IoT applications with built-in Wi-Fi and Bluetooth.
- **Arduino Pro Mini**: Best for low-power, space-constrained, and embedded applications.

Choosing the right Arduino board depends on the specific requirements of your project. Consider factors like the number of I/O pins, memory, processing power, and connectivity options to make an informed decision. Happy building!
