using System;
//Create Breathing class inehirting CommonElements class
class Breathing : CommonElements
{
    //Create a constructor of the class, and add values to define the welcome message. this is inheritance
    public Breathing() : base("Breathing", "This activity will help you relax by walking you through breathing in and out slowly. Clear your mind and focus on your breathing.\n\nHow long, in seconds, would you like for your session? "){}
    
    //Overrides the Run method from the CommonElements class
    protected override void Run()
    {
        Console.WriteLine("");
        Spinner();
        int elapsed = 0;
        while(elapsed < _Duration)
        {
            Console.WriteLine("Breathe in...");
            Counter(3);
            Console.WriteLine("Breathe out...");
            Counter(3);
            elapsed += 6; //Each cycle means 6 seconds to elapsed until it reach the _Duration          
        }
    }
} //End of Breathing class