using System;

//Create the class
class ChecklistGoal : Goal
{
    //Declare protected variables
    protected int _Target;
    protected int _CurrentCount;
    protected int _Bonus;
    protected int _TotalScore;

    //Getter and Setter to be access outside without interacting with the variable directly
    public int Target
    {
        get { return _Target; }
        set { _Target = value; }
    }    

    public int CurrentCount
    {
        get { return _CurrentCount; }
        set { _CurrentCount = value; }
    }

    public int Bonus
    {
        get { return _Bonus; }
        set { _Bonus = value; }
    } 
    public int TotalScore
    {
        get { return _TotalScore; }
        set { _TotalScore = value; }
    } 

    //Constructor
    public ChecklistGoal(string name, string description, int points, int target, int bonus) : base(name, description, points)
    {
        Target = target;
        CurrentCount = 0;
        Bonus = bonus;
    }

    //Override RecordEvent
    public override void RecordEvent()
    {
        if (_CurrentCount < Target)
        {
            _CurrentCount++;
        }
        if (_CurrentCount == Target)
        {
            _TotalScore += Bonus; // Give bonus points when target is reached
        }
    }
    
    //Overrride GetStatus
    public override string GetStatus()
    {
        // If the goal is fully completed (CurrentCount >= Target), show [X]
        if (_CurrentCount >= _Target)
        {
            return "[X] " + _Name; // Fully completed
        }
        else
        {
            return "[ ] " + _Name + " - Completed " + _CurrentCount + "/" + _Target + " times";
        }
    }

    //Override SaveFormat
    public override string SaveFormat()
    {
        return $"ChecklistGoal,{Name},{Description},{Points},{CurrentCount},{Target},{Bonus}";
    }
}