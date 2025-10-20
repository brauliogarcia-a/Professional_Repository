import csv

def main():

    I_NUMBER_INDEX = 0
    NAME_INDEX = 1

    i_number = input("Please enter an  I-number (xxxxxxxxx): ")

    students_dict = read_dict("students.csv", I_NUMBER_INDEX)

    #print(students_dict)

    if i_number in students_dict: 
        list = students_dict[i_number]
        name = list[1]
        print(name)
    else:
        print("Not in list.")


def read_dict(filename, key_column_index):
    """Read the contents of a CSV file into a compound
    dictionary and return the dictionary.

    Parameters
        filename: the name of the CSV file to read.
        key_column_index: the index of the column
            to use as the keys in the dictionary.
    Return: a compound dictionary that contains
        the contents of the CSV file.
    """

    
    #Create an empty dictionary to store data from CSV file.
    student_dictionary = {}
    
    #Open file for reading and store a reference to the students_file.
    with open(filename, "rt") as students_file:

        # Use the csv module to create a reader object that will read from the students_file
        reader = csv.reader(students_file)

        next(reader)

        for row_list in reader:

            key = row_list[key_column_index]

            student_dictionary[key] = row_list

    return student_dictionary

# Call main to start this program.
if __name__ == "__main__":
    main()