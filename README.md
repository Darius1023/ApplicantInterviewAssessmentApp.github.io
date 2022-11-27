
# Applicant Interview Assessment App

![Screenshot 2022-11-26 11 15 54](https://user-images.githubusercontent.com/118221854/204070515-e026e8f5-3137-4811-b893-61540a0c9a44.png)
 
Applicant Interview Assessment App is a Website Application for HR Personnel who interviewed thier Applicants.

It will help HR Personnel in assessing their Applicants thru the sets of questions given.

Although it is subjective approach but it may have a bigger help in deciding who will be hired in your Precious Company.

Now if you are interested. This is how I did it!

Open Folder you want to save the Application.

From folder directory type "cmd" and hit enter.

Execute command >npx create-react-app applicant-app.

Find the folder and open it with visual code.

Check if the creation is okey by hitting control j to show terminal and type nmp start. It will show the default React Web Application.

From mui.com find the link and install this: npm install @mui/material @emotion/react @emotion/styled.

insert this link to index.html: 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

Remove the some codes in the App.JS from line 6 to 21 and the logo reference as well.

Create a New Folder named 'components'.

Create a file Login.js.

Inside of Login.js type rfc (should install ES7 + React/Redux/React-Native snippets).

It create a automatic Component.

Create a folder name hooks

Create a file name useForm.js

Encode some codes to Create the Text field for Email and name with error function. See attached file.

Create ASP.Net Project

Open Visual Studio 2022

Choose ASP.NET Core Web API

Name the Project. 

Choose Net 6.0 (Long-term support)

Uncheck the Configure for HTTPS.

Click Create.

Install Microsoft.EntityFrameworkCore v6 thru NuGet Packages.

Install also the Microsoft.EntityFrameworkCore.SqlServer and .Tools.

Create a Folder named Models.

Create a class named Question.cs

Encode some codes. See attach File for this code.

Create another class named Participant.cs

Encode some codes. See attach File for this code.

Create a class named ApplicantDBContext.cs

Encode some codes. See attach File for this code.

Encoce some codes at Program.cs. See attach File for this code.

Encoce some codes at appsetting.json. See attach File for this code.

Click Window, then Run, type services.msc

Check SQL Server (SQLEXPRESS) is running.

![Screenshot 2022-11-26 17 48 12](https://user-images.githubusercontent.com/118221854/204082678-582d03b4-8ed6-4c46-af47-65ab6c8b97b1.png)

If you can't see it, then install the Microsoft SQL Server Management Studio 19

Build the project by right click on the API then choose Build.

We will do migration. Go to Tools> NuGet Package Manager >Package Manager Console

Make Sure that the Default Project is the name of your project you are working for.

Under Package Manager Console Type Add-Migration "initial create" and hit enter. During this process 

the Script will be created according to the Model we have inside this project.

After that, type Update-Database and hit enter. It will create a database using Ms SQL Server Management Studio 19

To check it, open Ms SQL Server Management Studio 19, then type the name of your server : (local)\sqlexpress then connect.

![Screenshot 2022-11-26 18 07 08](https://user-images.githubusercontent.com/118221854/204083384-355470cd-7c10-4b3a-a358-c4324144a2ab.png)

After you connect, the created database ApplicantDB will be shown.

![Screenshot 2022-11-26 18 05 39](https://user-images.githubusercontent.com/118221854/204083407-daa4fac1-b42d-4744-8bf0-2ea5fc9a8aed.png)

Let us expand the ApplicantDB, Open the Tables, Click the design of dbo.Participants and dbo.Questions  to check if they

are properly created.

![Screenshot 2022-11-26 18 15 43](https://user-images.githubusercontent.com/118221854/204083666-d99051ce-29f5-45e4-8fac-280faa3650c4.png)

![Screenshot 2022-11-26 18 15 52](https://user-images.githubusercontent.com/118221854/204083668-661662d3-bcc9-4741-9fed-7bfad11663ba.png)

After that create a query with the question and answer to be inserted in the dbo.Questions

![Screenshot 2022-11-26 18 23 48](https://user-images.githubusercontent.com/118221854/204083982-65f2e27d-7915-42c9-a538-99dca3d3d3a5.png)

Then Execute

The Right Click on the dbo.Questions then Select the Top 1000 Rows

![Screenshot 2022-11-26 18 25 21](https://user-images.githubusercontent.com/118221854/204084058-439f656b-8b4c-4d88-b3a5-8db36d9dd9f3.png)

Now it is time to create API Controllers

Before that Click again the build to check if there is an error. If none, proceed.

Right CLick on Controller and Add Controller, Select API, then API Controller with actions, using Entity Framework.

Select Model class as Question (ApplicantAPiModels).

Then, Data context class is ApplicantDbContext (ApplicantAPIModels). And named it as QuestionController.cs

It will automatically created a script or codes inside of it. 

There will have some error but just install Microsoft.VisualStudio.Web.CodeGeneration.Design thru Manage NuGet Packages to solve it.

Create Another Controller named ParticipantController.cs.

Add and Edit some codes in the Participant and Question controller.

![Screenshot 2022-11-26 22 32 05](https://user-images.githubusercontent.com/118221854/204094055-27f52493-4983-40f3-91de-cd63f90e697b.png)

Go back to Visual Code > to useForm.js

To Test it Run the Project and it will go to Swagger

![Screenshot 2022-11-26 22 52 04](https://user-images.githubusercontent.com/118221854/204094998-bbbe3e63-ae09-4504-a117-8070dcddd00d.png)

In order to make an API request from React Application to the  ApplicantAPI. Install the package Axios.

Open New Terminal then> npm i axios

Create a new folder under src named api. Create index.js

Import the Axios to index.js and copy the URL in the Swagger then make a connection by following this code:

![Screenshot 2022-11-26 22 53 42](https://user-images.githubusercontent.com/118221854/204095078-50380314-bd36-4d86-8ed5-e7b22f34f0f4.png)

Now we make post request to the ApplicantAPI. Inside the login.js add some of these codes.

![Screenshot 2022-11-26 22 59 24](https://user-images.githubusercontent.com/118221854/204095360-90d80b23-4e54-4e85-87ff-1007240cd466.png)

Now we copy the the URL in the React App and make some code inside the Program.cs

![Screenshot 2022-11-26 23 07 30](https://user-images.githubusercontent.com/118221854/204095611-3126f375-1bba-4b95-853c-3870bdce790b.png)

Now try it with the React App and under console the data will be shown.

Check also your database if it is working.

![Screenshot 2022-11-26 23 16 27](https://user-images.githubusercontent.com/118221854/204095993-9d35f177-f045-4a58-8335-9faae330ecdf.png)

If you register with the same email and name it will not post for new but still get the same id.

Now Let us configure Context API.

Let us create a file under components named Question.js. Import the following code.

![Screenshot 2022-11-26 23 22 07](https://user-images.githubusercontent.com/118221854/204096204-003f3c73-e044-4e7c-8c4b-d25dbf136826.png)

Let us also create a file under components named Result.js

![Screenshot 2022-11-26 23 24 29](https://user-images.githubusercontent.com/118221854/204096316-a41f2adb-c607-4e5b-8853-8bdbd51ec991.png)

Create new file under hooks named useStateContext.js

![Screenshot 2022-11-26 23 24 40](https://user-images.githubusercontent.com/118221854/204096326-3cfbd374-3fbd-4d57-8f75-657e2a35c11c.png)

Follow coding in my video for setting up the configuration of API of different components.

After that, let us route configuration.

Open New Terminal and type >npm i react-router-dom to install the react-router-dom

Follow this codes:

![Screenshot 2022-11-26 23 46 29](https://user-images.githubusercontent.com/118221854/204097187-e9cae072-8dd5-4b9a-a9f3-dfbaf7067cba.png)

Follow my video again for other codes in the login.js for navigation

For Questions in the Application to be shown in the Front End Let us have some code like this. 

![Screenshot 2022-11-27 16 26 03](https://user-images.githubusercontent.com/118221854/204125854-f18d5d22-03a5-4b3a-96d5-bc267e6ae740.png)

To Test it if it is working, try it in the swagger.

![Screenshot 2022-11-27 16 28 58](https://user-images.githubusercontent.com/118221854/204125947-d46ed1ba-6e60-44ab-a7fa-2aa0d88011c0.png)

We will make also some codes in the components of React the same effect of request. Follow these codes.

![Screenshot 2022-11-27 16 54 25](https://user-images.githubusercontent.com/118221854/204126844-b4d58fcc-0976-4195-a4b1-8e99f2a97bc4.png)

Create a new folder called helper to format the time in proper format. Create a file named index.js. Follow these codes

![Screenshot 2022-11-27 16 56 39](https://user-images.githubusercontent.com/118221854/204126917-4cd6a416-ba8a-4007-a63e-435312db0abb.png)

Create Title Bar for all pages and  buttons in the Result to Submit the grade and log-out. Create a component named Layout.js. 

Search again at mui.com for Appbar. And follow these codes.

![Screenshot 2022-11-27 17 24 42](https://user-images.githubusercontent.com/118221854/204128034-e42e1ef9-72d5-4695-aeda-a2c18eb29ed2.png)
























