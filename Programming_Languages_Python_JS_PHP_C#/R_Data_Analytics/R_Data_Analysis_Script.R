# Load libraries
library(ggplot2)

# Create a function to display messages for the user
display_message <- function(msg) {
    cat("\n",msg,"\n")
}

# List with the CSV path
files <- list(
    student_data = "data/student_data.csv",
    school_data = "data/school_data.csv"
)

# Check if the file exist. Implementing a loop. The loops identify each name of the list, and later the value of each name
check_files <- function(files){ # files is the list with the paths
    for(name in names(files)){ # names() identify the name of the path in the list
        path <- files[[name]] # files[[name]] identify the value in the list
        if (file.exists(path)){
            print(paste("File found:", path))
        } else{
            print(paste("File NOT found:", path))
        }
    }
}
# Display messages found, not found
check_files(files)


# Load CSV files into dataframes.
load_datasets <- function(files){ # files is the list with the paths
    # Ceate an empty list
    data_list <- list()
    for(name in names(files)){ # names() identify the name of the path in the list
        path <- files[[name]] # files[[name]] identify the value in the list
        df <- read.csv(path)
        data_list[[name]] <- df # add the excel files as dataframes to this data_list
        print(paste("Loaded:", name))
    }
    return(data_list)
}
# Execute the function that load the dataframes
datasets <- load_datasets(files)


# Answer questions about the student dataset
# Function that uses the different data types.
process_student_info <- function(df){
    # Boolean result. +50% are above 17 years old
    bln_result <- mean(df$age > 17) > 0.5  # df$age is the proper way to select a column in a dataframe

    # Numeric result. remove NA values before calculation. Find the average in age
    average_age <- mean(df$age, na.rm =TRUE) # na.rm = TRUE remove NA values

    # Vector result
    # Empty vector to list all the school ids
    school_vector <- c()
    for (i in 1:nrow(df)){
        school_vector <- c(school_vector, as.character(df$school[i])) # as.character ensure the data is converted into string
    }

    # Factor result. unique school names
    unique_schools <- factor(school_vector)
    unique_school_name <- levels(unique_schools)

    # Print text. count students
    number_of_students <- nrow(df)
    message_text <- paste("Total number of students is:", number_of_students)
    print(message_text)

    # Create a list with all the results to print
    results <- list(
        average_above_17 = bln_result,
        average_age = average_age,
        school_vector = school_vector,
        unique_school_name = unique_school_name,
        number_of_students = number_of_students
    )

    return(results)
}

# Display questions
results <- process_student_info(datasets$student_data) # Select student_data dataset
display_message("Display Analytics Answers:")
print(results)

# Function or template to display a dataframe
show_first_rows <- function(df){
    print(head(df,5))
}

# Display datasets
display_message("First 5 rows of the student_data")
show_first_rows(datasets$student_data)

display_message("First 5 rows of the school_data")
show_first_rows(datasets$school_data)

# Display students older than 17
filter_students_age <- function(df){
    results <- subset(df,age > 17)
    return(head(results, 5)) # Only 5 rows
}

display_message("Students older than 17")
print(filter_students_age(datasets$student_data))

#Join tables
join_tables <- function(students, schools){
    merged <- merge(
        students,
        schools,
        by.x = "school",
        by.y = "school_id"
    )
    return(head(merged, 5)) # Only 5 rows
}

display_message("Join student and school data:")
print(join_tables(datasets$student_data,datasets$school_data))

# Display bar graph
display_message("Display student gender distribution")
print(
    ggplot(datasets$student_data, aes(x = sex, fill= sex)) + # load the dataframe and assign column to X axis. 
    geom_bar(color = "black", alpha = 0.8) + # draw the bars
    scale_fill_manual(values = c("F" = "pink", "M" = "lightblue")) + # define colors for each category
    labs( # Lable titles
        title = "Number of students by gender",
        x = "Gender",
        y = "Count"
    ) +
    theme_minimal(base_size = 14) # Predefined theme
)

# End program
display_message("Program completed succesfully!!")

