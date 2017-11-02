# Stopwatch

We are going to build a stopwatch using our microbit. We want to start the the timer when we press button A and stop and display the time elapsed when we press button B.

To count the time elapsed between timer start and stop, we will use the “running time” value from the “Input” menu.
![Running time](/Instructions/Stopwatch/Running_time_input.png). All we need to do is check it at the start of our timer and again when we end the timer.

### Step 1
We will store the running time value at the start and end into 2 variables: start_time and end_time:
![start_time and end_time](/Instructions/Stopwatch/Set_time_vars.png)

### Step 2
Once out timer starts, we might want to display some image so we can see that the stopwatch is counting. To do that, we will use  a variable to remember that the stopwatch has started and display an animation as long as the value is true.
![adding "timer_started"](/Instructions/Stopwatch/Stopwatch_init_vars.png)

![animation counting](/Instructions/Stopwatch/Animation_stopwatch_counting.png)

### Step 3
Starting the count. When button A is pressed, we will check the value of "running time" and mark that the stopwatch is running.
![start count](/Instructions/Stopwatch/Start_count.png)

### Step 4
Stop the count. When we press button B we want to check again the value of "running_time" and display the seconds. Because "running_time" is counted in miliseconds, we will substract the "running_time" value we remember at the start from the running_time value at the end and *divide by 1000*
![stop count](/Instructions/Stopwatch/Display_end_time.png)

Hey, we have a loop displaying some blinking lights? We need to stop the animation for now, until the next timer will be started by pressing button A. So let's mark that the stopwatch is no longer running.

![stop animation and display count](/Instructions/Stopwatch/Stop_animation_and_display_timer.png)

Excellent! you now have a stopwatch you can use to time yourself or your friends when running.
