using System;
using System.Collections.Generic;

// Video class to store video details and comments
class Video
{   
    //Declare protected variales
    protected string _title;
    protected string _author;
    protected int _length; // Length in seconds
    
    //Declare getters and setters
    public string Title
    {
        get{return _title;}
        set{_title = value;}
    }
    public string Author
    {
        get{return _author;}
        set{_author = value;}
    }

    public int Length
    {
        get{return _length;}
        set{_length = value;}
    }

    //The reason we use an object inside the list, is to ensure we capture the different values we need in each row
    private List<Comment> Comments;

    public Video(string title, string author, int length)
    {
        //Preparing the spaces in the memory to store values
        Title = title;
        Author = author;
        Length = length;
        //We have this list to get rows with multiple values
        Comments = new List<Comment>();
    }

    public void AddComment(string name, string text)
    {
        Comments.Add(new Comment(name, text));
    }

    public int GetCommentCount()
    {
        return Comments.Count;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Title: {Title}");
        Console.WriteLine($"Author: {Author}");
        Console.WriteLine($"Length: {Length} seconds");
        Console.WriteLine($"Number of Comments: {GetCommentCount()}");
        Console.WriteLine("Comments:");
        foreach (var comment in Comments)
        {
            Console.WriteLine($"- {comment.Name}: {comment.Text}");
        }
        Console.WriteLine("-----------------------------");
    }
}