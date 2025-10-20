using System;
using System.Collections.Generic;

//This class will do the heavy lifting, hiding the words as the user hit enter
class ScriptureApp
{
    //Create an object from the ReferenceApp and asing it to a private variable
    private ReferenceApp _reference; 
    //Create a variable for the list. This list will split the string into words and get an index for each words
    //Important! the list contains the class WordApp, for that reason when we call the list we can call methods from the WordApp class
    private List<WordApp> _words = new List<WordApp>();

    //Create a constructor/method that will split the scripture string into words and index them and put it into a list _words.
    //will define the two paramters aceptable for this method. same name of the class.
    public ScriptureApp(string text, ReferenceApp reference)
    {
        //Call the _reference private keyword and asign it to the paramter of the method
        _reference = reference;
        //Split the text of the scripture into words, save it into a list to have them indexed
        string[] wordsArray = text.Split(' ');
        //Loop through each word and add it to the list but also using the WordApp mark all words as false, not hidden
        foreach (string word in wordsArray)
        {
            WordApp wordObject = new WordApp(word);
            _words.Add(wordObject);
        }

    } // end of the constructor ScriptureApp

    //The following code will take the separted list of words, marked as false, then join them together with spaces
    //and finally combine those words with the reference
    public string DisplayReferenceScripture()
    {
        //Call the reference variable, asign it to a new variable and convert it to a string
        string referenceText = _reference.ToString();
        //Get the separated list, and replace the text for ___
        List<string> wordTexts = new List<string>();
        
        //Loop the words of scripture to display them together
        foreach(var word in _words)
        {
            //I can access GetDisplayText because _words list contains the WordApp methods
            //Show the text word, or the replace word
            wordTexts.Add(word.GetDisplayText());
        }
        //Create a new varible to give spaces to the list that will contain the separated words
        string scriptureSpaces = string.Join(" ", wordTexts);
        //Return the combined text of the reference logic and the scripture text logic
        //This is just the instruction that will be used in console.log later
        return $"{referenceText}: {scriptureSpaces}";
    } //End of DisplayReferenceScripture

    //The following method will hide the words from the separated list
    public void HideWords()
    {
        //Create an object for the random class
        var random = new Random();
        //Create a list to hold the visible words
        //WordApp in the separated list mean that all words are marked as false becasue they are not hidden
        var visibleWords = new List<WordApp>();

        //Create a loop to keep track of visible words
        foreach (var word in _words)
        {
            //Logic to check if the word is visible
            //The ! symbol is the negative or whatever is Worddapp.hiddenWord, actuall it means true.
            //If a word is marked as false, not hidden, add it to the visible words
            if (!word.HiddenWord)
            {
                //Add a visible word and add it to the visibleWords list
                visibleWords.Add(word);
            }
        }
        //Exit the method if no more words can be hidden
        if (visibleWords.Count == 0)
        {
            return;
        }
        //This method will hide 1 word or a quarter of the visible words
        //At this point I tried many solutions but the program finishes before hiding all the words :(
        int wordsToHide = Math.Max(1, visibleWords.Count / 4); // Hide 25% of remaining words
        //This loop will loop the list of visible words, select a random index of them, hide them and remove them from the visible words list
        for (int i = 0; i < wordsToHide; i++)
        {
            int index = random.Next(visibleWords.Count);
            //Hide the word
            visibleWords[index].Hide();
            //Remove the word from the list to avoid repeated words that were already hidden
            visibleWords.RemoveAt(index);
        }
    }//End of HideWords class    

    //This method check if all words are hidden
    public bool CheckIfAllHidden()
    {
        //Is going to loop the list of index to know if each word is visible or hidden.
        //This will be used as a signal to terminate the program
        foreach(var word in _words)
        {
            //HiddenWord is a boolean variable that can hold the true or false value
            if(!word.HiddenWord)
            {
                //if even one word is visible, then the value becomes false
                return false;
            }
        }
        //if all words are hidden, the value becomes true
        return true;
    }

} // end of class ScriptureApp