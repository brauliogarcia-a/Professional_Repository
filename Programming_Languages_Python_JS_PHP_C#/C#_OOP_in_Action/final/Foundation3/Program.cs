using System;

/*
This program will show the Inheritance principle by creating a base class
that will be used by other classes. in this way I don't have to recreate
the entire code, but reuse methods and variables already created.
This program will show event information and vary the amount of information
according the type of event.
*/

//Main Class
public class Program
{
    public static void Main(string[] args)
    {
        //Creating object address
        Address eventAddress = new Address("2485 Augustine Drive", "Santa Clara", "CA", "95054");

        //Creating events objects and provide arguments for each event
        Event lectureEvent = new Lecture("Thinking Out of the Box", "How to innovate at work." ,new DateTime(2025, 2, 9), new TimeSpan(12, 0, 0), eventAddress, "Steve Jobs", 300);
        Event receptionEvent = new Reception("Be yourself", "Discover who you really are.", new DateTime(2025, 7, 20), new TimeSpan(11, 0, 0), eventAddress, "customersupport@greatevent.com");
        Event outdoorEvent = new OutdoorGathering("Barbeque", "An afternoon with friends.", new DateTime(2025, 11, 30), new TimeSpan(15, 0, 0), eventAddress, "Sunny with some clouds expected.");

        //Display details for Lecure Events
        Console.WriteLine("Lecture Event - Standard Details:");
        Console.WriteLine(lectureEvent.GetStandardDetails());
        Console.WriteLine();

        Console.WriteLine("Lecture Event - Full Details:");
        Console.WriteLine(lectureEvent.GetFullDetails());
        Console.WriteLine();

        Console.WriteLine("Lecture Event - Short Description:");
        Console.WriteLine(lectureEvent.GetShortDescription());
        Console.WriteLine();
        
        //Display details for Reception Events
        Console.WriteLine("Reception Event - Standard Details:");
        Console.WriteLine(receptionEvent.GetStandardDetails());
        Console.WriteLine();

        Console.WriteLine("Reception Event - Full Details:");
        Console.WriteLine(receptionEvent.GetFullDetails());
        Console.WriteLine();

        Console.WriteLine("Reception Event - Short Description:");
        Console.WriteLine(receptionEvent.GetShortDescription());
        Console.WriteLine();
        
        //Display details for Outdoor Gathering events
        Console.WriteLine("Outdoor Gathering - Standard Details:");
        Console.WriteLine(outdoorEvent.GetStandardDetails());
        Console.WriteLine();

        Console.WriteLine("Outdoor Gathering - Full Details:");
        Console.WriteLine(outdoorEvent.GetFullDetails());
        Console.WriteLine();

        Console.WriteLine("Outdoor Gathering - Short Description:");
        Console.WriteLine(outdoorEvent.GetShortDescription());
    }
}