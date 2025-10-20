using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Type your grade in numbers ");
        string reading = Console.ReadLine();

        int grade = int.Parse(reading);

        string letter = "";

        if ( grade >= 90 && grade <= 100)
        {
            letter = "A";
        }
        else if ( grade >= 80 && grade <= 89)
        {
            letter = "B";
        }
        else if ( grade >= 70 && grade <= 79)
        {
            letter = "C";
        }
        else if ( grade >= 60 && grade <= 69)
        {
            letter = "D";
        }
        
        Console.WriteLine($"Your grade is {grade} = {letter}");

        if (grade >= 70)
        {
          Console.WriteLine("Congratulations, you passed the class!! all that hard work is paying off!");
        }
        else
        {
           Console.WriteLine("You did not pass. Why do we fall? to learn to pick ourselves up.");
        }
    }
}