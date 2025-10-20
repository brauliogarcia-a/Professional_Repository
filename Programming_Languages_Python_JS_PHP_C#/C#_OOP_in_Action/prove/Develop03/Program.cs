using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

class Program
{
    //Main method
    static void Main(string[] args)
    {
        //Create a variable with the scripture
        string scriptureWords = "But seek ye first the kingdom of God and his righteousness, and all these things shall be added unto you.";
        //Create an object to set up the values needed it. this is encapsulation, interacting only with certain variables of another class. the object was prepared as a string.
        var referenceObject = new ReferenceApp("3 Nephi",13,33); 
        //Create an object from the ScriptureApp, asign values to the 2 arguments this class can receive. one argument is the scripture, and the other the reference
        //Important! This variable is creating on object to call the methods from ScriptureApp.
        var showScripture = new ScriptureApp(scriptureWords,referenceObject);
        //create a variable name click to end the loop if user decite to type quit
        string click = "";
        //Create the loop to run the app until the user type quit or the user finish to hide all the words
       while(!showScripture.CheckIfAllHidden())
        {
            Console.Clear();
            Console.WriteLine(showScripture.DisplayReferenceScripture());
            Console.WriteLine("Press enter to hide more words or type quit to exit");
            //Capture the input from the user, could be an empty click 
            click = Console.ReadLine();
            //Logic to end the loop if user type quit
            if (click.ToLower() == "quit")
            {
                //End the loop
                break;
            }
            //Display the scripture and hide random words
            showScripture.HideWords();
        }
    }

} // end of class Program