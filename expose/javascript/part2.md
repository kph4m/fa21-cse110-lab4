1. Line 12 will print 3. The function will iterate through the entire array. Once i = 3, it doesn't satisfy the i < prices.length so the loop will end at i=3.

2. Line 13 will print 150. discountedPrice will keep getting reassigned until it reaches the last element in prices, which is 300. 300 * (1-.5) = 150.

3. Line 14 will print 150. The final value will be with prices[2] = 300. Taking the discountedPrice value we got from question 2, 150*100 = 15,000. Math.round(15,000) = 15,000. 15,000 / 100 = 150.

4. The function will return the discounted array, [50,100,150]. 

For the first price, 100 * (1-.5) = 50. 50* 100 = 5,000. Math.round(5000) = 5000. 5000 / 100 = 50.

For the second price, 200 * (1-.5) = 100. 100 * 100 = 10,000. Math.round(10000) = 10000. 10000 / 100 = 100.

We calculated the third price in question 3.

5. Line 12 will cause an error because the console.log statement is outside of the block that let i was declared in.

6. Line 13 will cause an error because the console.log statement is outside of the block that let discountedPrice was declared in.

7. Line 14 will print 150. Since the console.log is within the block that finalPrice was declared in, it's able to access it's value.

8. The function will return the value of the discounted array, [50, 100, 150]. This is similar to question 4, as both let and var in this case let's the values be accessed by eveything in the function so it will calculate the values and push them the same way.

9. Line 11 will cause an error. The console.log statement is trying to access i outside of the block where it's declared, which isn't possible for a let variable type.

10. Line 12 will print 3. const length = prices.length, which is 3. Since the const variable type cannot be reassigned, it will always remain 3. The console.log statement is within the block in which length was declared so it can access it's value.

11. The function will return the discounted array, [50,100,150], similar to question 4 and 8. The const variable type doesn't allow reassignment or redeclaration, and in this case, we're simply adding to the array instead of reassigning it so it works fine.

12. 

    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. 

    A. '32' 
        For the + operator, if any operands is a string (3 in this case), string concatenation is performed so the output is a string. 

    B.  1
        For the - operator, all operands are converted to numbers so the output is a number.

    C.  3
        Null value represents 0 so 3+0 = 3.

    D.  '3null'
        Similar to question A, for the + operator, if there any operands that is a string (3 in this case), string concatenation is peformed.

    E.  4
        When the plus operator is used bwteen a boolean and number, the boolean is converted to a number. True is mapped to the number 1, so 1+3 = 4.

    F.  0
        Null is mapped to number 0, false is also mapped to number 0, so adding 0+0=0.

    G.  '3undefined'
        Similar to question A and D, for the + operator, if there any operands that is a string (3 in this case), string concatenation is performed.

    H.  NaN
        For the - operator, all operands are converted to numbers. '3' is converted to the number 3, and undefined is converted to NaN. 3 - NaN = Nan.

14.

    A.  true
        When comparing different value types, JavaScript converts the values to numbers. '2' gets converted to 2, 2 > 1 is true.

    B.  false
        For string comparisons, it compares the first character of both strings first. 2 > 1 so in order for it to be true, it should be '2' > '12'.

    C.  true
        This statement is using a regular equality operator (==) so '2' gets converted to 2, so 2 == 2 is true. 

    D.  false
        The statement uses a strict equality operator (===) so it doesn't convert the type of they're different. Since there's a number and string, it will immediately return false.

    E.  false
        This statment is using a regular equality operator (==), true is mapped to the number 1, 1 == 2 is false.

    F.  true
        The Boolean function will create an object with an intial value of true if any value (besides 0,-0, null, false, NaN, undefined, or "") is passed as the first parameter. Therefore, Boolean(2) = true. The strict equality checks if both values are the same type, since they're both true and are booleans, the output is true.

15. 
The regular equality operator (==) checks the values of the variables. If they're different, it will convert the variables to be of the same type and then check the values.

The strict equality operator (===) checks the values AND types of the variables. If the variables are different types, it will immediately return false.

17. The output of the function will be [2,4,6]. Starting with modifyArray, it takes in an array and a callback. It creates a new array, newArr, with type const. The for loop will iterate through all of the elements of the passed-in array, [1,2,3], and push the values of the result of each elements as a parameter for the callback function, doSomething. doSomething multiplies the passed-in element by 2, so the values that will be pushed to the newArr will be 2 (1*2), 4 (2*2), and 6 (3*2). It will then return the newArr.

19. The output will be 1 4 3 2. The console.log statements will be printed out first (1 and 4), then the setTimeout statement with the least time (3), then the next setTimeout statement (2).






