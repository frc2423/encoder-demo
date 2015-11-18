#!/usr/bin/env python3

import wpilib


class MyRobot(wpilib.SampleRobot):
    
    def robotInit(self):
        self.sd = wpilib.SmartDashboard
        self.sensor = wpilib.AnalogInput(0)
    
    def disabled(self):
        
        tm = wpilib.Timer()
        tm.start()
        
        while self.isDisabled():
            
            if tm.hasPeriodPassed(0.1):
                v = self.sensor.getVoltage()
                print("Voltage", v)
                self.sd.putDouble('sensor', self.sensor.getVoltage())
            
            wpilib.Timer.delay(0.020)


if __name__ == '__main__':
    wpilib.run(MyRobot)
