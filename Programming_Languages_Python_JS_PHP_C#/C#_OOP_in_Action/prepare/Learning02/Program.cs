using System;
using System.ComponentModel.DataAnnotations;

class Program
{
    static void Main(string[] args)
    {
        // Create an object and initialize
        Job displayJob = new Job();
        displayJob.display();
        Resume displayResume = new Resume();
        displayResume.display();
    }
}