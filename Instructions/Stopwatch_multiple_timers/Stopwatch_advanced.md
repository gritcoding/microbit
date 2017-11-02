# Stopwatch with multiple counts

So you learned how to build a stopwatch in our previous tutorial [Stopwatch](/Instructions/Stopwatch/Stopwatch.md).
But now you want to count the time of your friends racing each other. Looks like you need your stopwatch to count multiple timers.

We want to remember several time counts but we don't know yet how many so in this program we will use an "array" of time counts. 
> An array is just a way of storing multiple variables of the same type without needing to give each of them a name. 
> We usually read the values of an array by indication the position of a variable in the array. First value starts at position 0.

### Step 1
We will use the program we wrote for simple Stopwatch but this time, instead a single "end_time variable:, we will use and array of "timers":
![init timers array]

### Step 2
Because we don't have a single "end_time" variable anymore, when button B is pressed we will add hte current "running_time" input value to the array of timers.
Remember that we don't want to stop counting yet, we just want to remember what the time is right now.
![add timer at the end of array]

Every time we press button B, the "running_time" value is added at the end of the array. So we can have as many counts as we want!

### Step 3
So when do we stop counting? When both button A and B are pressed. Now we will have to display the seconds we counted from when we started the stopwatch until every time that button B was pressed.
To do that, we will need to go through all of hte values in the "timers" array and deduct from them the "start_time" value.
