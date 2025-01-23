# MongoDB $inc Operator Issue
This example demonstrates a potential issue with the `$inc` operator in MongoDB when dealing with counters that can reach zero.  Decrementing a counter that's already at zero leads to a negative value, which might not be the intended behavior.
The solution demonstrates how to safely handle this situation using conditional updates.

## Bug Report
The original code incorrectly decrements the `counter` field using `$inc`, without checking if it is already 0. 

## Solution
The solution utilizes the `$inc` operator within a conditional update to handle scenarios where the `counter` value is zero. This prevents negative values by only decrementing when the counter is greater than 0. 