# Stopwatch with multiple counts


So you learned how to build a stopwatch in our previous tutorial [Stopwatch](/Instructions/Stopwatch/Stopwatch.md).
But now you want to count the time of your friends racing each other. Looks like you need your stopwatch to count multiple times.

We want to remember several time counts but we don't know yet how many so in this program we will use an "array" of time counts. 
> An array is just a way of storing multiple variables of the same type without needing to give each of them a name. 
> We usually read the values of an array by indicating the position of a variable in the array - first value starts at position 0.

### Step 1
We will use the program we wrote for simple Stopwatch but this time, instead a single "end_time variable" we will use and array of "timers":

![init timers array](/Instructions/Stopwatch_multiple_timers/images/Init_timers.png)

The code in the forever loop and when button A is pressed remains unchanged .. 

### Step 2
Because we don't have one "end_time" variable anymore, when button B is pressed we will add the current "running_time" input value to the array of timers.
Remember that we don't want to stop counting yet, we just want to remember what the time is right now.

![add timer at the end of array](/Instructions/Stopwatch_multiple_timers/images/Add_timer.png)

Every time we press button B, the "running_time" value is added at the end of the array. So we can have as many counts as we want!

### Step 3
When do we stop counting? When both button A and B are pressed. Now we will have to display the seconds we counted from when we started the stopwatch until every time that button B was pressed.
To do that, we will need to go through all of the values in the "timers" array and deduct from them the "start_time" value.
This is how we read each value in an array:

![iterate array](/Instructions/Stopwatch_multiple_timers/images/Iterate_array.png)
> Remember that the first value starts at position 0. In this code, "i" indicates the position of the values. Which do you think is the last position in an array with 3 values ?

Now that we know how to get each value, we only need to display some text for each of them saying "Timer 1", "Timer 2", "Timer 3" .. and of course the seconds passed between starting the stopwatch and the first, second, third .. time we pressed button B.

![display timers](/Instructions/Stopwatch_multiple_timers/images/Display_timers.png)

#### Step 4
What about the total time, from when we started the stopwatch until we pressed A+B ? Let's add that last value to the "timers" array before we display them.

![add last timer](/Instructions/Stopwatch_multiple_timers/images/Add_last_timer.png)
