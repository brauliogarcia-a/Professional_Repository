using System;
using System.Collections.Generic;
using System.IO;

//Create a class Program
class Program
{
    //Create main method to initialize the program
    static void Main(string[] args)
    {
        //Create an object for GoalManager to handle goals
        GoalManager manager = new GoalManager();
        //Declare variables to receive input from the user
        int inputUser = 0;  
        int inputUser2 = 0;   
        
        //Clear console for a clearn reading
        Console.Clear();

        while (inputUser != 6)
        {
            //Show the total points
            Console.WriteLine($"\n\nTotal Score: {manager.TotalScore} points\n");
            //Display the menu using a method from the CommonElements class
            Console.WriteLine("Menu Options:\n 1.Create New Goal\n 2.List Goals\n 3.Save Goals\n 4.Load Goals\n 5.Record Event\n 6.Quit\nSelect a choice from the menu:");
            //Capture the information from the user when typing quit
            inputUser = int.Parse(Console.ReadLine()); 
            //Create a switch method to run a program according to the option           
            switch(inputUser)
            {
                case 1:
                    //Create new Goal
                    //Clear console for a clearn reading
                    Console.Clear();
                    //Display the menu using a method from the CommonElements class
                    Console.WriteLine("The types of Goals are:\n 1.Simple Goal\n 2.Eternal Goals\n 3.Checklist Goals\nWhat type of goal would you like to create?:");
                    //Capture the information from the user when typing quit
                    inputUser2 = int.Parse(Console.ReadLine());  
                    //Code for the common questions for each goal type
                    Console.Write("Enter goal name: ");
                    string name = Console.ReadLine();
                    Console.Write("Enter goal description: ");
                    string description = Console.ReadLine();
                    Console.Write("Enter points: ");
                    int points = int.Parse(Console.ReadLine());                   
                    switch(inputUser2)
                    {
                        case 1: 
                            //Simple Goal
                            manager.AddGoal(new SimpleGoal(name, description, points));
                        break;

                        case 2:
                            //Eternal Goal                        
                            manager.AddGoal(new EternalGoal(name, description, points));
                        break;

                        case 3:
                            //Check List Goal
                            Console.Write("Enter target count: ");
                            int target = int.Parse(Console.ReadLine());
                            Console.Write("Enter bonus points: ");
                            int bonus = int.Parse(Console.ReadLine());
                            manager.AddGoal(new ChecklistGoal(name, description, points, target, bonus));
                        break;
                        //This line helps to avoid issues when the input is not the expected value
                        default:
                            Console.WriteLine("Invalid option.");
                        break;                        
                    }
                break;

                case 2:
                    //List of Goals                  
                    manager.DisplayGoals();       
                break;

                case 3:
                    //Save Goals               
                    //Get the file name from the user
                    Console.Write("Enter filename to save/load goals: ");      
                    string filenameSave = Console.ReadLine();              
                    manager.SaveGoals(filenameSave);                 
                break;     

                case 4:
                    //Load Goals                  
                    //Get the file name from the user
                    Console.Write("Enter filename to save/load goals: ");
                    string filenameLoad = Console.ReadLine();
                    manager.LoadGoals(filenameLoad);                 
                break;     
                
                case 5:
                    //Record Event
                    manager.DisplayGoals();
                    Console.Write("Enter goal number to complete: ");
                    if (int.TryParse(Console.ReadLine(), out int goalIndex))
                    {
                        manager.RecordEvent(goalIndex - 1);
                    }
                    else
                    {
                        Console.WriteLine("Invalid input.");
                    }                 
                break;  
                  
                case 6:
                    //Quit
                    Console.WriteLine("The Program Ended");
                break; 

                //This line helps to avoid issues when the input is not the expected value
                default:
                    Console.WriteLine("Invalid option.");
                break;                         

            }
        }
    }
}