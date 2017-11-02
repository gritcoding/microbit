# Path Chaser

Build a game where you need to bring a moving dot (path chaser) to a fixed position on the board - let's call it a portal. The moving dot will move in the direction that the microbit board is tilted.

### Step 1
Starting point in the game - let's place the portal in a random position on the board, and the moving dot in the middle. I will remember the position of the chaser with variabled "current_x" and "current_y" and the position of the portal with variables "portal_x" and "portal_y".
> We can turn on or off a single point on the board without modifying the other lights by using the "plot" and "unplot" options in hte LED menu.

![set portal and chaser position](/Instructions/PathChaser/images/Setup_portal_chaser.png)

### Step 2
Let's make the moving dot blink so we will know which one is the path chaser..

![blink chaser](/Instructions/PathChaser/images/Blinking_chaser.png)

### Step 3
The position of the path chaser changes by how we tilt the microbit. We will read the "rotation" values from the input menu and move the dot.
> The "rotation" values can be read for "pitch" - tilt of the board forwards or backwards - and for "roll" - tilt of the board to the left or right.

![change chanser location](/Instructions/PathChaser/images/Change_current_location.png)

Did you notice? what if we tilt the board in one direction for a long time. What will happen to the position of the moving dot?
We will need to make sure that the dot does not receive any coordinates outside of the board - in other words, we must make sure that "current_x" and "current_y" are >= 0 and <= 4. Otherwise, we won't see the chaser anymore!

![chaser location with limits](/Instructions/PathChaser/images/Location_limits.png)

> Are the formulas correct? What are the new values if "current_y" = -1 or "current_x" = 5 ?

### Step 4
The game ends when the path chaser has found the portal. So after every move, we should check if the chaser position is the same as the portal position. We will use a loop to do that - we will blink and move the chaser dot only while the 2 locations are different.
> Explore the Loop menu on the left - 2 of the loops can be used to read values from an array.

![check portal found](/Instructions/PathChaser/images/Condition_end.png)

### Step 5 - optional, you don't need to complete this step
To make it easier to move blocks around, I separated all the instructions from step 3 into a Function. You can use the Advanced menu to create and call functions..
> Functions are blocks of code that, when called, perform tasks. They are a handy way of executing big pieces of code with just a little bit of text - a function call. They must be declared - the big piece of code goes there, and then you can use the code as often as you want by only calling the name of the function.

![function declaration](/Instructions/PathChaser/images/Funct_declare.png)
![function call](/Instructions/PathChaser/images/Funct_call.png)

### Step 6
Once the portal is found, let's display an image to let our gamers know they won.

![game end](/Instructions/PathChaser/images/Game_end.png)



