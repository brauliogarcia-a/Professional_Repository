using System;
using System.Timers;
//Create Reflection class inehirting CommonElements class
class Reflection : CommonElements
{
    //Create an array for prompts
    private static readonly string[] Prompts =
    {
        "Think of a time when you stood up for someone else.",
        "Think of a time when you defend a true principle",
        "Think of a time when you helped someone in need.",
        "Think of a time when you did something truly selfless."
    }; 

    //Create an array for questions
    private static readonly string[] Questions =
    {
        "Why was this meaningful to you?",
        "How did you get started?",
        "What did you learn from this experience?",
        "How did you feel when it was complete?",
        "What made this time different than other times when you were not as successful?",
        "What is your favorite thing about this experience?",
        "What could you learn from this experience that applies to other situations?",
        "What did you learn about yourself through this experience?",
        "How can you keep this experience in mind in the future?"
    }; 

    //Create a constructor of the class, and add values to define the welcome message. this is inheritance
    public Reflection() : base("Reflection", "Reflect on times you showed strength and resilience.\n\nConsider the following prompt:\n---Think of a time when you did something really difficult.---\n\nHow long, in seconds, would you like for your session? "){}
    
    //Overrides the Run method from the CommonElements class
    protected override void Run()
    {   
        //Random Objetc
        Random random = new Random();   
        //Select a random prompt and display it  
        Console.WriteLine(Prompts[random.Next(Prompts.Length)]);
        Spinner();
        int elapsed = 0;
        while (elapsed < _Duration)
        {
            Console.WriteLine(Questions[random.Next(Questions.Length)]);
            Spinner();
            elapsed += 3;
        }
    }
} //End of Reflection class