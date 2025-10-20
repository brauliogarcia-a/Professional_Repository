using System;

//Create Listing class inehirting CommonElements class
class Listing : CommonElements
{
    //Create an array for Prompts
    private static readonly string[] Prompts =
    {
        "--Who are people that you appreciate?--",
        "--What are personal strengths of yours?--",
        "--Who are people that you have helped this week?--",
        "--When have you felt the Holy Ghost this month?--",
        "--Who are some of your personal heroes?--"
    };

    //Create a constructor of the class, and add values to define the welcome message. this is inheritance
    public Listing() : base("Listing", "This activity will help you reflect on the good things in our life by having you list as many things as you can in a certain area.\n\nHow long, in seconds, would you like for your session? "){}

    protected override void Run()
    {
        Random random = new Random();
        Console.WriteLine(Prompts[random.Next(Prompts.Length)]);
        Console.WriteLine("You may begin in: ");
        Counter(5);
        List<string> items = new List<string>();
        int elapsed = 0;
        while (elapsed < _Duration)
        {
            Console.Write("Enter an item: ");
            items.Add(Console.ReadLine());
            elapsed += 3;
        }
        Console.WriteLine($"You listed {items.Count} items.");
    }
}