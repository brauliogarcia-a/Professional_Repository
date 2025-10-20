using System;

class Program
{
    static void Main(string[] args)
    {
        //Prepare to generate a random number
        Random randomGenerator = new Random();
        int rNumber = randomGenerator.Next(1, 100);
        //Declare the guess number at this point to be able to use this variable in the condition
        int nNumber = 0;
        //The loop
        while (nNumber != rNumber)
        {

        rNumber = randomGenerator.Next(1, 100); // because this variable type was already declared, we just need to call the variable

        Console.WriteLine($"What is your magic number? {rNumber}");

        Console.Write("What is your guess? ");
        string number = Console.ReadLine();
        nNumber = int.Parse(number); // because this variable type was already declared, we just need to call the variable

        if (rNumber == nNumber)
        {
           Console.WriteLine("You guessed it!");
        }
        else if (nNumber < rNumber)
        {
           Console.WriteLine("Lower");
        }
        else if (nNumber > rNumber)
        {
           Console.WriteLine("Higher");
        }

        } // end of while

    } // end of main
} // end of class