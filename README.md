# Introduction

This repository is a solution to converting Roman Numerals to Arabic numbers.

# Rules

The following rules are used to convert and validate the Roman Numerals:-
1. Thers are only 7 valid characters, MDCLXVI which have values 1000, 500, 100, 50, 10, 5 and 1.
2. Read left to right from highest to lowest number.
3. Convert to a number by adding the characters except for specific cases where you use subtraction.	
4. Subtraction is only used for IV, IX, XL, XC, CD and CM which become 4, 9, 40, 90, 400 and 900.
5. Subtraction cannot be followed by a character from the same range, eg. 1-9, 10-90, 100-900
6. Only I, X, C and M can be repeated up to 3 times.

# Solution 

My solution consists of validating the Roman Numerals string with a regular expression.  Once it passes this validation then I used a for loop to convert each character and do a running total to make a grand total at the end of the loop.