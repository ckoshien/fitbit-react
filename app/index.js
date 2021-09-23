import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { GRotate } from './tools'

// Update the clock every second
//clock.granularity = "seconds";

const Watchface = () => {
  const hoursHand = GRotate( 'hours' ),
    minutesHand = GRotate( 'minutes' ),
    secondsHand = GRotate( 'seconds' );

    setInterval(() => {
      const today = new Date(),
          hours = today.getHours() % 12,
          minutes = today.getMinutes(),
          seconds = today.getSeconds(),
          miliseconds = today.getMilliseconds();
    
        const minsAngle = minutes * 360 / 60;
        secondsHand( (seconds *1000 + miliseconds)*6/1000 );
        minutesHand( minsAngle );
        hoursHand( hours * 360 / 12 + minsAngle / 12 );
    }, 100);
  if (HeartRateSensor) {
    console.log("This device has a HeartRateSensor!");
    const hrm = new HeartRateSensor();
    hrm.addEventListener("reading", () => {
      console.log(`Current heart rate: ${hrm.heartRate}`);
    });
    hrm.start();
 } else {
    console.log("This device does NOT have a HeartRateSensor!");
 }
}

Watchface();