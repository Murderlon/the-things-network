import cowImage from 'assets/cow-tracking.png'
import weatherImage from 'assets/weather-station.jpg'
import parkingImage from 'assets/parking-sensor.png'

export default [
  {
    label: 'Cow tracking',
    name: 'useCases',
    value: 'cowTracking',
    backgroundSrc: cowImage,
    link:
      'https://www.thethingsnetwork.org/marketplace/product/sodaq-cow-tracker',
    text:
      // eslint-disable-next-line max-len
      'Equipped with a powerful microcontroller, our SODAQ Cattle Tracker is LoRaWAN based device. The board is using the ublox Eva 8m GPS module, giving it a GPS fix within seconds. It can stay in (deep) sleep mode until it moves. A LED light shows the status of the board through the waterproof casing of the tracker.'
  },
  {
    label: 'Parking sensor',
    name: 'useCases',
    value: 'parkingSensor',
    backgroundSrc: parkingImage,
    link: 'https://www.thethingsnetwork.org/marketplace/product/prestosense',
    text:
      // eslint-disable-next-line max-len
      'PrestoSense detectors are installed on on-street parking bays. They not only detect a vehicle’s presence, but also the parking duration of a car. The information is forwarded to the parking operator. He uses the data to analyze the load and turnover rate of his car park and to optimize enforcement. The motorist uses the information directly on his smartphone. The city’s traffic guidance system or the motorist’s GPS system guide him to the next available parking bay.'
  },
  {
    label: 'Industrial wireless micro-weather station',
    name: 'useCases',
    value: 'weatherStation',
    backgroundSrc: weatherImage,
    link:
      'https://www.thethingsnetwork.org/marketplace/product/meteohelix-iot-pro-lora',
    text:
      // eslint-disable-next-line max-len
      'Using the patented design of helical air temperature measurement technology enables the MeteoHelix professional wireless micro-weather stations to achieve air temperature measurement accuracies to the highest requirements of World Meteorological Organization, therefore making this wireless weather station the most accurate on the market by a wide margin. Designed for professional use, it is affordable enough for most households due to the use of IoT wireless technologies.'
  }
]
