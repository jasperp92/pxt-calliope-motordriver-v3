enum Motor {
    A,
    B,
    //% block="A and B"
    AB
};

enum MotorDirection {
    //% block="forward"
    Forward,
    //% block="backward"   
    Reverse
};

/**
* Blocks to control the onboard motors
*/
//% color=#008272 weight=30 icon="\uf1b9"
namespace motors_v3 {


    /**
    * Controls one or two motors attached to the board.
    */
    //% blockId=block_break_motor block="motor %motor break"
    //% weight=80
    export function brakeMotor(motor: Motor) {
        pins.digitalWritePin(DigitalPin.M_MODE, 1);
        switch (motor) {
            case Motor.A:
                pins.analogWritePin(AnalogPin.M_AIN2, 0)
                break;
            case Motor.B:
                pins.analogWritePin(AnalogPin.M_BIN2, 0)
                break;
            case Motor.AB:
                pins.analogWritePin(AnalogPin.M_AIN2, 0)
                pins.analogWritePin(AnalogPin.M_BIN2, 0)
                break;
        }
    }

    /**
    * Controls one or two motors attached to the board.
    */
    //% blockId=block_control_motor block="motor %motor |moving %direction |at %duty_percent \\%"
    //% duty_percent.shadow="speedPicker"
    //% weight=80
    //% duty_percent.defl=100
    //% direction.defl = MotorDirection.Forward
    export function dualMotorPower(motor: Motor, direction: MotorDirection, duty_percent: number) {
        pins.digitalWritePin(DigitalPin.M_MODE, 1);
        let power: number = Math.map(duty_percent, 0, 100, 0, 1023);
        switch (motor) {
            case Motor.A:
                if (direction === MotorDirection.Forward) {
                    pins.digitalWritePin(DigitalPin.M_AIN1, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.M_AIN1, 1)
                };
                pins.analogWritePin(AnalogPin.M_AIN2, power)
                break;
            case Motor.B:
                if (direction === MotorDirection.Forward) {
                    pins.digitalWritePin(DigitalPin.M_BIN1, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.M_BIN1, 1)
                };
                pins.analogWritePin(AnalogPin.M_BIN2, power)
            case Motor.AB:
                if (direction === MotorDirection.Forward) {
                    pins.digitalWritePin(DigitalPin.M_AIN1, 0)
                    pins.digitalWritePin(DigitalPin.M_BIN1, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.M_AIN1, 1)
                    pins.digitalWritePin(DigitalPin.M_BIN1, 1)
                };
                pins.analogWritePin(AnalogPin.M_AIN2, power)
                pins.analogWritePin(AnalogPin.M_BIN2, power)
                break;
        }
    }
}
