# Import the SQL connection module 
from sqlalchemy import create_engine, text, MetaData, Table, Column, Integer, String, Float, select, insert, update, delete
# Import pandas to read a CSV
import pandas as pd
# import operating system library to check folders
import os

# List of CSV files. Key value pairs
files = {
     "student_data": "data/student_data.csv",
     "school_data": "data/school_data.csv"
}

# Loop list of files to check if they exist. Key value pairs
for name, path in files.items():
     if os.path.exists(path): # Check if the file exist in the windows folder
          print("File found")
     else:
          print("file not found")
          exit()

# Create connection to MySQL and create a student database
try:
    # Create object and provide credentials to connect to the DB
    engine = create_engine("mysql+pymysql://root:9GbGdDzuwrOqeh9h@localhost:3306") # Connect to MySQL
    with engine.connect() as conn: # open and close connection
        print("succesful connection!")
        # Read normal SQL commands
        conn.execute(text("CREATE DATABASE IF NOT EXISTS students_db"))
        print("Database created succesfully!")
except Exception as e:
        print("connection error", e)

# Connect to the student database
db_engine = create_engine("mysql+pymysql://root:9GbGdDzuwrOqeh9h@localhost:3306/students_db") # Connect to a specific database

# Loop the list of files and upload each CSV
for name, path in files.items():
    try:
          df = pd.read_csv(path)
          print(f"\nUploading {name}")
          df.to_sql(name, con=db_engine, if_exists="replace", index=False)
          print(f"Table {name} created succesfully in MySQL")
    except Exception as e:
        print(f"Error uploading {name}", e)
print("\nAll done, tables created succesfully!")

# CRUD operations
# Create a contaner for the tables
metadata = MetaData()
# Load the tables. Table name, container, connection
students = Table("student_data", metadata, autoload_with=db_engine)
schools = Table("School_data", metadata, autoload_with=db_engine)

# Select all records from the student table
with db_engine.connect() as conn: # Open and close connection with the database
     stmt = select(students) # SQL statement
     results = conn.execute(stmt).fetchmany(size=5) #Execute query and retrive data
     print("\nFirst 5 Rows:\n")
     for row in results:
          print(row)

# Select specific columns and filter
with db_engine.connect() as conn: # Open and close connection with the database
     stmt = select(students.c.school, students.c.age).where(students.c.age > 17) # SQL statement. table, column, specific column
     results = conn.execute(stmt).fetchmany(size=5) #Execute query and retrive data
     print("\nStudents older than 17:\n")
     for row in results:
          print(row)

# Insert new row
with db_engine.connect() as conn: # Open and close connection with the database
     stmt = insert(students).values(
          school ="GP",
          sex="M",
          age=20,
          address="U",
          famsize="NewRow"
     ) # SQL statement
     conn.execute(stmt) #Execute query and retrive data
     conn.commit()
     print("\nNew student record added")

# Delete row
with db_engine.connect() as conn: # Open and close connection with the database
     stmt = delete(students).where(students.c.famsize == "NewRow")
     conn.execute(stmt) #Execute query and retrive data
     conn.commit()
     print("\nRecord deleted")

# Update row
with db_engine.connect() as conn: # Open and close connection with the database
     stmt = (
          update(students).where(students.c.famsize=="LE3").values(address="NEW")
     ) #Execute query and retrive data
     conn.execute(stmt) 
     conn.commit()
     print("\nRecord updated")

# JOIN example
with db_engine.connect() as conn: # Open and close connection with the database
     # Create the join condition between both tables
     j = students.join(schools, students.c.school == schools.c.school_id)

     #Select columns from both tables
     stmt = select(
          students.c.school,
          students.c.age,
          schools.c.school_name,
          schools.c.school_city
     ).select_from(j)

     # Fetch and display first 5 records
     results = conn.execute(stmt).fetchmany(size=5) #Execute query and retrive data
     print("Joined student and school data:\n")
     for row in results:
          print(row)