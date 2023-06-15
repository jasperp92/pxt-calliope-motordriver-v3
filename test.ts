input.onPinPressed(TouchPin.P0, function () {
    if (forward) {
        forward = false
    } else {
        forward = true
    }
})
input.onButtonPressed(Button.A, function () {
    if (start_Motor_A) {
        start_Motor_A = false
    } else {
        start_Motor_A = true
    }
})
input.onPinPressed(TouchPin.P2, function () {

})
input.onButtonPressed(Button.B, function () {
    if (start_Motor_B) {
        start_Motor_B = false
    } else {
        start_Motor_B = true
    }
})
let start_Motor_B = false
let start_Motor_A = false
let forward = false
forward = true
basic.forever(function () {
    if (forward) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        if (start_Motor_A) {
            motors_v3.dualMotorPower(Motor.A, MotorDirection.Forward, 50)
        } else {
            motors_v3.brakeMotor(Motor.A)
        }
        if (start_Motor_B) {
            motors_v3.dualMotorPower(Motor.B, MotorDirection.Forward, 50)
        } else {
            motors_v3.brakeMotor(Motor.B)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        if (start_Motor_A) {
            motors_v3.dualMotorPower(Motor.A, MotorDirection.Reverse, 50)
        } else {
            motors_v3.brakeMotor(Motor.A)
        }
        if (start_Motor_B) {
            motors_v3.dualMotorPower(Motor.B, MotorDirection.Reverse, 50)
        } else {
            motors_v3.brakeMotor(Motor.B)
        }
    }
})
