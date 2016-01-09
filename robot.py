#!/usr/bin/env python3

import wpilib


class MyRobot(wpilib.SampleRobot):
    
    def robotInit(self):
        self.sd = wpilib.SmartDashboard
        self.sensor = wpilib.AnalogInput(0)
    
    def getDegrees(self):
        value = self.sensor.getVoltage()
        if value > 4.7:
            value = 4.7
        elif value < 0:
            value = 0

        return value * (360.0/4.7)

    def disabled(self):
        
        tm = wpilib.Timer()
        tm.start()
        
        while self.isDisabled():
            
            if tm.hasPeriodPassed(0.1):
                d = self.getDegrees()
                print("Degrees", d)
                self.sd.putDouble('sensorDegrees', d)
            
            wpilib.Timer.delay(0.020)


if __name__ == '__main__':
    wpilib.run(MyRobot)
