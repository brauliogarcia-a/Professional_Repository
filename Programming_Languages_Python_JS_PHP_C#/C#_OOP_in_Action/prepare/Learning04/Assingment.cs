using System;

class Assignment
{
    //Set the private variables that are general for all classes
    protected string _studentName;
    protected string _topic;
    //Create a constructor to work with private variables
    public Assignment(string studentName, string topic)
    {
        //Asign the private variables to normal variales used as paramters
        _studentName = studentName;
        _topic = topic;
    }
    //Setter student name. to receive the  new value set by the user in the object
    public void SetStudent(string studentName)
    {
        _studentName = studentName;
    }
    //Setter topic. to receive the  new value set by the user in the object
    public void SetTopic(string topic)
    {
        _topic = topic;
    }
    //Get studentName
    public string GetStudentName()
    {
        return _studentName;
    }
    //Get topic
    public string GetTopic()
    {
        return _topic;
    }            
    //The GetSummary method will be used to display the data with the values assined on the object in the main file
    public string GetSummary()
    {
        return $"{_studentName} {_topic}";
    }
}