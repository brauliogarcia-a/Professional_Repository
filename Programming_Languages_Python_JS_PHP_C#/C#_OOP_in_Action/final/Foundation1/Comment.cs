using System;
using System.Collections.Generic;

// Comment class to store individual comments
class Comment
{   
    //Declare protected variables
    protected string _name;
    protected string _text;

    //Declare getters and setters
    public string Name
    {
        get{return _name;}
        set{_name = value;}
    }
    public string Text
    {
        get{return _text;}
        set{_text = value;}
    }
    public Comment(string name, string text)
    {
        Name = name;
        Text = text;
    }
}