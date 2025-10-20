using System;

/*
This program will display the tracking activity depending on the sport. the idea is to show the principle of polymorphism.
I achieved this by overriding methods from another class, that coincidenly was the base class that was inherited from other classes.
Polymorphism, helped me to display the tracking activity depending on the sport type and requirements. 
*/

//Main class
class Program
{
    static void Main(string[] args)
    {
        //Create a list to hold each type of sport and tracking values
        var activities = new List<Activity>
        {
            new Running(new DateTime(2025, 01, 07), 20, 5.0),
            new Cycling(new DateTime(2025, 02, 12), 25, 15.0),
            new Swimming(new DateTime(2025, 03, 28), 45, 100)
        };
        
        //Loop to display each of the activities in the list and display data
        foreach (var activity in activities)
        {
            Console.WriteLine(activity.GetSummary());
        }
    }
}