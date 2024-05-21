#!/bin/bash

#Create the necessary tables and data for the database
# Run Django makemigrations 
python manage.py makemigrations

# Run Django migrate
python manage.py migrate

#Run the backend server
# Run Django development server
python manage.py runserver
