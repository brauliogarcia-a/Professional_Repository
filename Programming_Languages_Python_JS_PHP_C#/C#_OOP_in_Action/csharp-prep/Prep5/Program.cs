using System;

class Program
{
    static void Main(string[] args)
    {
        //display welcome message
        WelcomeMessage();
        //ask the complete name
        string name = FullName();
        //ask the favorite number
        int number = FavoriteNumber();
        //call square just to fill the parameter when display the final message
        double squareNumber = SquareNumber(number);
        //display name and the square of the favorite number
        FinalMessage(name, squareNumber);
    }
    //function to display a welcome message
    static void WelcomeMessage()
    {
      Console.WriteLine("Welcome to the program!");
    }
    //function to ask the complete name
    static string FullName()
    {
      Console.Write("Please enter your name: ");
      string completeName = Console.ReadLine();
      return completeName;       
    }
    static int FavoriteNumber()
    {
      Console.Write("Please type your favorite number: ");
      int capturedNumber = int.Parse(Console.ReadLine());
      return capturedNumber;       
    }
    static double SquareNumber(int inputNumber)
    {
      //int squareNumber = inputNumber * inputNumber;
      double squareNumber = Math.Pow(inputNumber,2);
      return squareNumber;       
    }
    static void FinalMessage(string fullName, double squareNumber)
    {
      Console.WriteLine($"{fullName}, the square of your favorite number is {squareNumber}");
    }
} // en of class program
    