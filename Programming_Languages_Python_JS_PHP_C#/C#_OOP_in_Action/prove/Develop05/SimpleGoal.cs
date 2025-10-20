using System;
using System.Diagnostics;

//Create the class
class SimpleGoal : Goal
{
    //Declare protected variables
    protected bool _IsCompleted;
    //Getter and Setter to be access outside without interacting with the variable directly
    public bool IsCompleted
    {
        get { return _IsCompleted; }
        set { _IsCompleted = value; }
    }

    //Constructor
    public SimpleGoal(string name, string description, int points) : base(name, description, points)
    {
        //Incomplete by default
        IsCompleted = false;
    }

    //Override RecordEvent
    public override void RecordEvent()
    {
        //change status
        IsCompleted = true;
    }

    //Overrride GetStatus
    public override string GetStatus()
    {
        //Display the complete or not sign according with an if true or false logic
        if (IsCompleted == true)
        {
            return "[X] " + Name;
        }
        else
        {
            return "[] " + Name;
        }
    }
    
    //Override SaveFormat
    public override string SaveFormat()
    {
        return $"SimpleGoal,{Name},{Description},{Points},{IsCompleted}";
    }

}