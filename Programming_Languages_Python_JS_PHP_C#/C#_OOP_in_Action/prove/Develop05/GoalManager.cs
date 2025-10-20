using System;
using System.Runtime.InteropServices;

//Create the class
class GoalManager
{
    //create a list ot keep track of the goals 
    private List<Goal> goals = new List<Goal>();
    //variable that keeps track of the points with a getter
    private int _TotalScore;
    public int TotalScore
    {
        get { return _TotalScore; }
    }    

    //Create a method to add goals to the list
    public void AddGoal(Goal goal)
    {
        goals.Add(goal);
    }
    
    //Method to record completion of goals
    public void RecordEvent(int index)
    {
        if (index >= 0 && index < goals.Count)
        {
            //Mark the goal as complete
            goals[index].RecordEvent();
            //Update the total score
            _TotalScore += goals[index].GetPoints();
        }
        else
        {
            //Message for validation
            Console.WriteLine("Invalid goal number.");
        }
    }
    
    //Method to display the goals and show the score
    public void DisplayGoals()
    {
        Console.WriteLine("\nYour Goals:");
        for (int i = 0; i < goals.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {goals[i].GetStatus()}");
        }
        Console.WriteLine($"Total Score: {_TotalScore}\n\n");
    }

    //Method to save goals in to a file
    public void SaveGoals(string filename)
    {
        using (StreamWriter writer = new StreamWriter(filename))
        {
            //Save the total score
            writer.WriteLine(_TotalScore);
            //Save each goal
            foreach (var goal in goals)
            {
                writer.WriteLine(goal.SaveFormat());
            }
        }
        //Validation message
        Console.WriteLine("Goals saved successfully!\n\n");
    }
    
    //Method that read information from a file and save it in the memory that the program can run certain functions
    public void LoadGoals(string filename)
    {
        if (File.Exists(filename))
        {
            //Clear the list before loading new goals
            goals.Clear();
            string[] lines = File.ReadAllLines(filename);

            //Load the total score
            _TotalScore = int.Parse(lines[0]);
            Console.WriteLine($"\nTotal Score: {_TotalScore}");
            
            //Loop through each line and recreate the goals
            for (int i = 1; i < lines.Length; i++)
            {
                //Separe each item with a coma ,
                string[] parts = lines[i].Split(',');
                //The if else if structure check which type of goal will be load to present the necessary values for that goal
                if (parts[0] == "SimpleGoal")
                {
                    //Parse the properties of SimpleGoal
                    var goal = new SimpleGoal(parts[1], parts[2], int.Parse(parts[3]))
                    {
                        IsCompleted = bool.Parse(parts[4]) // Set using the property
                    };
                    goals.Add(goal);
                }
                else if (parts[0] == "EternalGoal")
                {
                    //Parse the properties of EternalGoal
                    goals.Add(new EternalGoal(parts[1], parts[2], int.Parse(parts[3])));
                }
                else if (parts[0] == "ChecklistGoal")
                {
                    //Parse the properties of ChecklistGoal
                    var goal = new ChecklistGoal(parts[1], parts[2], int.Parse(parts[3]), int.Parse(parts[5]), int.Parse(parts[6]))
                    {
                        CurrentCount = int.Parse(parts[4]) // Set using the property
                    };
                    goals.Add(goal);
                }
            } //end of for
            Console.WriteLine("Goals loaded successfully!\n\n");
        } //end of if
        else
        {
            //Vaidation message
            Console.WriteLine("No saved goals found.");
        }
    }        

}