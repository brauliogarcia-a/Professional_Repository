using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

//Create a class Program
class Program
{
    //Create main method to initialize the program
    static void Main(string[] args)
    {
        //Declare variables to receive input from the user
        int inputUser = 0;    
        //Clear console for a clearn reading
        Console.Clear();

        while (inputUser != 4)
        {
            //Display the menu using a method from the CommonElements class
            Console.WriteLine("Menu Options:\n 1.Start breathing activity\n 2.Start reflecting activity\n 3.Start listing activity\n 4.Quit\nSelect a choice from the menu:");
            //Capture the information from the user when typing quit
            inputUser = int.Parse(Console.ReadLine()); 
            //Hold an object in a variable to use its methods
            CommonElements elements = null;
            //Create a switch method to run a program according to the option           
            switch(inputUser)
            {
                case 1:
                    //Creates an object from the Breathing class
                    elements = new Breathing();
                    elements.Header();
                    elements.Footer();
                break;

                case 2:
                    //Creates an object from the Breathing class
                    elements = new Reflection();
                    elements.Header();
                    elements.Footer();                
                break;

                case 3:
                    //Creates an object from the Breathing class
                    elements = new Listing();
                    elements.Header();
                    elements.Footer();                       
                break;                
            }
        }
    }
}