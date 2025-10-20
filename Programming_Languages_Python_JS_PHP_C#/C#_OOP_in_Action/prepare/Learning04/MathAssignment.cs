using System;

class MathAssignment : Assignment
{
    protected string _textbookSection;
    protected string _problems;
    //This is the constructor for the MathAssingment
    //Declare the variables from this class, the ones you want to call from other class, and then use base to have permission to call the variables from other class.
    public MathAssignment(string studentName, string topic, string textbookSection, string problems) : base(studentName, topic)
    {
        _textbookSection = textbookSection;
        _problems = problems;
    }
    //method to display the information for the math assingment
    public string GetHomeworkList()
    {
        return $"{_studentName}, {_topic}, {_textbookSection}, {_problems}";

    }    
}