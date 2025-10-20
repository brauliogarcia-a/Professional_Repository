# Overview

Description:
he script is going to use sqlalchemy library to connect to MySQL, then is going to create a database, later, is going to look for two files in the operating system using the os and pandas library, and will upload them as tables. there are two tables in the database to be able to perfom a join. 
The script is going to use some traditional SQL, but also is going to use the sintax and functions from the sqlalchemy library wich makes the queries easier and more powerful.

Purpose: This python script, is going to create a database, create some tables based on two CSV files, and run some queries to a local database hosted in MySQL. 

[Software Demo Video](https://www.youtube.com/watch?v=2bQ_9_--kLE)

# Relational Database

The database motor that I used for this project is MySQL. 

There are two tables, the student table and the school table. both of them are related using the school id column.

# Development Environment

Tools:
-MySQL
-VS Code
-Python Libraries: standard python os, sqlalchemy, and pandas

Languages:
-Python
-SQL

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Kaggle Dataset](http://url.link.goes.here)
- [Google Search AI Overview](https://www.google.com/search?q=read_csv+pthyon&client=firefox-b-d&sca_esv=3de6becc2547fb1f&sxsrf=AE3TifMzFxgMuK9kOAJqMju0yFmBdH8emA%3A1760843615723&ei=X1f0aPP2K8GkqtsPl9yN8A0&ved=0ahUKEwizouHRpa-QAxVBkmoFHRduA94Q4dUDCBA&oq=read_csv+pthyon&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3JlYWRfY3N2IHB0aHlvbjIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzINEAAYgAQYigUYQxiwAzITEC4YgAQYigUYQxjHARjRAxiwA0jTE1AAWABwAXgBkAEAmAEAoAEAqgEAuAEMyAEAmAIBoAIGmAMA4gMFEgExIECIBgGQBgqSBwExoAcAsgcAuAcAwgcDMi0xyAcE&sclient=gws-wiz-serp)
- [SQLalchemy Documentation](https://docs.sqlalchemy.org/en/20/tutorial/index.html?utm_source=chatgpt.com)
- [DataCamp Python & DataBases](https://docs.sqlalchemy.org/en/20/tutorial/index.html?utm_source=chatgpt.com)
- [Youtube Video](https://www.youtube.com/watch?v=3vsC05rxZ8c)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Use Aggregated functions
- Advanced filtering - GROUP BY, HAVING, ORDER BY
- Use subqueries