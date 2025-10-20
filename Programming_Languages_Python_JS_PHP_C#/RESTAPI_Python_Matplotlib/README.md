# Overview

Title: Pokemon API - Data Analysis

This python script will access the most recent Pokemon REST API. It will work with the data to answer three questions, show them in the terminal, and generate a PDF with three charts that answers the three questions.

The purpose of this project was to learn how to connect to an API using python, get the data in a JSON object, tranfor the data to answer questions, and graph that information.

Here is a short video where I demonstrate how the program works.

[Software Demo Video](https://youtu.be/YnOFft6L7bk)

# Data Analysis Results

* 1.How many generations exist?
* 2.How many pokemons exist in each generation?
* 3.How many legendary pokemons exist per generation?

# Development Environment

* IDE: VS Code
* Virtual environment for the project
* Language: Python
* Libraries:
* requests - Work with APIs
* pandas -Analytics Library
* json - Create JSON
* matplotlib - reate visualizations
* matplotlib.backends.backend_pdf - PDF library 
* tqdm - Progress Bar

# Useful Websites
* [Pokemon REST API](https://pokeapi.co/docs/v2)
* [DataCamp](https://app.datacamp.com/learn/courses/introduction-to-apis-in-python)
* [DataCamp](https://app.datacamp.com/learn/courses/data-manipulation-with-pandas)
* [Matplotlib](https://matplotlib.org/stable/gallery/misc/multipage_pdf.html?utm_source=chatgpt.com)
* [Pandas](https://pandas.pydata.org/docs/)


# Future Work
* Transform the roman numerals into modern digits
* Save the API in a CSV file to read the information in future iterations and do not wait until all the information is downloaded
* Send the data to a database and connect the script to get the information from there as well