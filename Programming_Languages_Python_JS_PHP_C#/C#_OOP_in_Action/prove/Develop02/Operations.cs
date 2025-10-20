using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.IO;

class Operations
{
    //Creating a list to hold the values that later will be saved. Entries Journal is a class with 3 variables for each column we expect.
    public List<string> inputUser = new List<string>();
    string questionCapture = ""; 
    string input = "";
    string answerCapture = "";
    string _loadFile = "";
    string _saveFile = "";
    string date = DateTime.UtcNow.ToString("yyyy-MM-dd");
    
    //WRITE
    public void Questions()
    {
        //Initialize and create the list
        List<string> questionsList = new List<string>(new string[] {"Who was the most interesting person I interacted with today?", "What was the best part of my day?", "How did I see the hand of the Lord in my life today?","What was the strongest emotion I felt today?","If I had one thing I could do over today, what would it be?"});
        //string input = "";
        //Create an object from the random class
        Random randomList = new Random();
        //Get random question 
        int randomQuestion = randomList.Next(0, questionsList.Count());
        //Print the question
        Console.WriteLine("Todays question is:\n{0}", questionsList.ElementAt(randomQuestion));
        //Use readline method to capture the value from the user
        string answerCapture = Console.ReadLine();
        //Generate a random question to save it in a variable that can be used to save the info in a document
        string questionCapture = questionsList.ElementAt(randomQuestion);
        //Concatenate the random question and the entry from the user to save it later in a document
        Console.WriteLine( input = $"\nInfo captured by the user,\nDate:{date},\nThe prompt: {questionCapture},\nThe answer: {answerCapture}\n");
        inputUser.Add(input);  
    }
    
    //DISPLAY
    public void Display()
    {
        //Read what is in the list
        foreach(var item in inputUser)
        {
            Console.WriteLine(item);
        }

    }
    
    //LOAD
    //Load means that we need to ask for a file name
    public void Load()
    {
        //Clean the original list
        inputUser.Clear();
        //ask the file name
        Console.WriteLine("Enter the file name to save:\n");
        string _loadFile = Console.ReadLine(); 
        //test what it was saved
        //Console.WriteLine(_loadFile);
        //Create new list
        //List<string> list = new List<string>();    
        //read from a file
        if (File.Exists(_loadFile))
        {
            inputUser = [.. File.ReadAllLines(_loadFile), .. inputUser];
        }
        else{
            Console.WriteLine("Missing File");
        }
    }

    //SAVE
    public void Save()
    {
        //ask the file name
        Console.WriteLine("Enter the file name to save:\n");
        string _saveFile = Console.ReadLine(); 
        //test what it was saved
        //Console.WriteLine(_saveFile);
        //the following code takes what is in the list, temporal memory, and put it into a static file   
        using (StreamWriter saving = new StreamWriter(_saveFile))
        {
            foreach (string row in inputUser)
            {
                saving.WriteLine(row);
            }
        }  
        //Confirmation message
        Console.WriteLine("Data Saved");       
    }


} //end of main class