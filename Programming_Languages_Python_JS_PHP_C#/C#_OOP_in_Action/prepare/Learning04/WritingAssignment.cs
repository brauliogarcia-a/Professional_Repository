using System;

class WritingAssignment : Assignment
{
    //Create protected variable
    protected string _title;
    //Constructor of the class to define paramters and call/inherit the constructor from other assingment class
    public WritingAssignment(string studentName, string topic, string title) : base(studentName, topic)
    {
        _title = title;
    }
    //method to display the writing assingment
    public string GetWritingInformation()
    {
        return $"{_studentName}, {_topic}, {_title}";
    }
}