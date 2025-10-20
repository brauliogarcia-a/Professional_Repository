using System;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
      //Stuff we need before anything  
      List<int> listNumbers = new List<int>();
      int addNumber = -1;
      //Instructions
      Console.WriteLine("Enter the list of numbers, type 0 when finished");
      //Loop
      while (addNumber != 0)
      {
       //add items to the list
       string addNumberRead = System.Console.ReadLine();
       addNumber = int.Parse(addNumberRead);
       listNumbers.Add(addNumber);
       
       //calculate the total from the list
       int sum = 0;
       foreach (int itemNumber in listNumbers)
       {
          sum += itemNumber;
       }
       //display the sum
       Console.WriteLine($"The total is: {sum}");

       //calculate avergage
       float average = ((float)sum) / listNumbers.Count;
       Console.WriteLine($"The average from the total is: {average}");

        //find the max number
        int maximum = listNumbers[0]; //the list by iteself won't work as a value for a variable. need to investigate. I know square brackets are to declare attributes
        //Loop
        foreach (int items in listNumbers)
        {
          if (items > maximum)
          {
             maximum = items;
          }
        }
        Console.WriteLine($"The maximum number from the list is: {maximum}");


      }//end of loop while

    } //end of main
} //end of class