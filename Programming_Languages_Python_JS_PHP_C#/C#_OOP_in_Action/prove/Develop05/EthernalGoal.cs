using System;

//Create the class
class EternalGoal : Goal
{
    //Constructor
    public EternalGoal(string name, string description, int points) : base(name, description, points)
    { }

    //Override RecordEvent
    public override void RecordEvent()
    {
        // Eternal Goal is something we always do
    }

    //Overrride GetStatus
    public override string GetStatus()
    {
        return "[ ] " + _Name; // Always show as incomplete
    }
    
    //Override SaveFormat
    public override string SaveFormat()
    {
        return $"EternalGoal,{_Name},{_Description},{_Points}";
    }    
}