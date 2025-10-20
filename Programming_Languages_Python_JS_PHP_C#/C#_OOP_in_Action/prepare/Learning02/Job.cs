using System;
using System.Reflection;

class Job
{
    string _company = "NXP Semiconductors";
    string _jobTitle = "Senior Web Analyst";
    string _startYear = "2018";
    string _endYear = "Currently working in the same place";
    public void display()
    {
        Console.WriteLine($"Company: {_company}\nJob Title: {_jobTitle}\nStart Year: {_startYear}\nEnd Year: {_endYear}");
    }
}