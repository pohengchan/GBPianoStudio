# Gillian Beckwith Piano Studio - BackEnd
<p align="center"><img src="https://user-images.githubusercontent.com/116795553/229541862-1789a445-d53c-4031-b11e-d65990bec8d3.JPG" width="300px" alt="logo of Gillian Beckwith piano studio"></p>


## :notes: Table of Contents
1. [Description](#description)
2. [Team Members](#team-members) 
3. [Technologies](#technologies)
4. [Tools](#tools)
5. [Installation](#installation)
6. [Tests](#tests)


## :musical_keyboard: Description

<p>GILLIAN BECKWITH Piano Studio is a project adapted to the needs of experienced and in-demand piano teacher, Gillian Beckwith. With the help of this app Gillian's students and students' parents can automatically book their classes with Gillian. Gillian, acting as the administrator from her mobile or PC, can grant her students access to the calendar to reserve their lessons. Within 24 hours, she confirms or declines the request on the app. She also has complete control of the calendar, being able to decide which days and hours are available for her students to book their classes.

The website is designed with easy and intuitive navigation for the user, with soft neon colors intended to make users feel as though they are in a studio. We have created a small piano where users can interact with it. All users have access to the entire website, except for the calendar, whose access is given by the teacher.

This README will give details of the backend side of the project. To view the general README, please go to the [main repository](https://github.com/GBPianoStudio/piano-classes/tree/main#readme). To view the frontend README, please go to the [frontend repository](https://github.com/GBPianoStudio/piano-classes/tree/main/frontend-pianoclasses#readme). 
</p>


## :handshake: Team members  
  
| Name | Role | |
| :--- | :---: | :---: |
| [Magda Wernik](https://github.com/magswer) | Scrum Master, Developer | https://github.com/magswer |
| [Po Heng Chan](https://github.com/pohengchan) | Product Owner, Developer | https://github.com/pohengchan |
| [Natalia Vorobyeva](https://github.com/NataliaVorobyeva) | Developer | https://github.com/NataliaVorobyeva |
| [Silvina Lucero](https://github.com/SILLUCERO) | Developer | https://github.com/SILLUCERO |
| [Jasmina Marín](https://github.com/JasMarin) | Developer | https://github.com/JasMarin |


## :computer: Technologies

These are the backend technologies that were used.

- PHP (v8.1) 
- MySQL (v10.4.27-MariaDB)
- Composer (v2.5.1)
- Node js (v18.12.1)
- Laravel (v9)
- Laravel/Ui (v4.2.1)
- Laravel/sanctum (v3.2)
- Laravel/ui (v4.2)
- axios (v1.3.4)


## :hammer: Tools

![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)  ![visualstudiocode](https://img.shields.io/badge/VSC-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Xampp](https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white)


## :link: Installation

This will explain how you can install the backend.

First of all, you will need to clone this repository.

* Clone github repository https://github.com/GBPianoStudio/piano-classes
Backend

You will also need to have composer installed to run the following code

* composer create-project --prefer-dist laravel/laravel my-laravel-app

You will also need to create a new database called **gbpianostudio** and use this in your .env file.

Run the following commands in the terminal for the backend:
- php artisan migrate:fresh --seed
- php artisan serve
- npm run dev


## Tests 

* php unit test
