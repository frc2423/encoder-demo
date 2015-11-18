encoder demo
============

Simple code for interfacing with an absolute encoder. Requires pyfrc
and pynetworktables2js.

Usage
=====

Robot
-----

Upload the robot code to the robot:

    python3 robot.py deploy --builtin
	
Or run it in the simulator:

    python3 robot.py sim
	
Webserver
---------

Connect to the robot:

    cd www
    python -m pynetworktables2js --robot=roborio-2423.local 

Or just connect to the simulator:

    cd www
    python -m pynetworktables2js

Credit
======

The compass.html code was taken from https://github.com/rheh/HTML5-canvas-projects.git