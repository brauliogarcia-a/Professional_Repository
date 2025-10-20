using System;
using System.Diagnostics;

//Decleared as an abstract type to be able to override the method that will execute the individual activities
abstract class CommonElements
{
    //Declare protected variables to capture the 
    protected string _ActivityName;    
    protected string _WelcomeMessage;
    protected int _Duration;

    //CommonElements constructor
    public CommonElements(string activity, string message)
    {
        _WelcomeMessage = message;
        _ActivityName = activity;
    }

    //Create a method to welcome the user and give instructions
    public void Header()
    {
        Console.Clear();
        Console.WriteLine($"Welcome to the {_ActivityName} activity\n");
        Console.WriteLine($"{_WelcomeMessage}");
        Console.Write("\nEnter the duration in seconds: ");
        _Duration = int.Parse(Console.ReadLine());
        Console.WriteLine("\nGet Ready...");
        Spinner();
        Run();
    }
    //Create this method to hold whatever value 
    protected abstract void Run();

    //Create a method to tell the user the activity was completed
    public void Footer()
    {
        Console.Write("\nWell Done!!");
        Console.Write($"You completed the {_ActivityName} activity for {_Duration} seconds\n");
        Spinner();
        Console.Clear();
    }

    //Createa method for the spinner
    public void Spinner()
    {
        //Characters for the spinner
        char[] spinnerChars = { '|', '/', '-', '\\' };
        //Delay in miliseconds
        int delay = 1000;
        //Loop that will create the effect of a spinner loader
        for (int i = 0; i < 1 * spinnerChars.Length; i++) //Spinner always last 1 character cycle
        {
            //Display the char movements
            Console.Write(spinnerChars[i % spinnerChars.Length]);
            //Introduce a delay
            Thread.Sleep(delay);
            //Override the character
            Console.Write("\b");
        }
    }

    //Create a counter display method. depending on the seconds assigned, the counter will last
    public void Counter(int counter)
    {
        for (int i = counter; i > 0; i--)
        {
            Console.Write($"\r{i}");
            Thread.Sleep(1500); //How long it last each number
        }
          Console.Write("\r   \r");
    }
} //End of class, CommonElements