using System;
using System.Collections.Generic;

class WordApp
{
    //This variable will hold the value for each single word
    private string _text;
    //Controls if the value is true or false
    public bool HiddenWord{get; private set;}
    //Constructor for WordApp, accept one argument.
    //The value for HiddenWord will start as False because in the begining all words are visible
    public WordApp(string text)
    {
        //Hold the value for each single word
        _text = text;
        // Start with all words visible
        HiddenWord = false; 
    }
    //This method set HiddenWord as true
    public void Hide()
    {
        HiddenWord = true;
    }
    //If HiddenWord is true, then replace the current word with "____"; if not, show the actua word
    public string GetDisplayText()
    {
        return HiddenWord ? "____" : _text;
    }

} // end of class WordApp