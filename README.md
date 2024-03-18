# Welcome to MERN Login and Authentication Service Application

Hello everyone, In this project, I have created **MERN Stack App with Login & Authentication System**. 


## To run this project in your local machine 

Download this project from above link. Create two configuration files into the project.
First in the client and second in the server.

In the Client Folder create .env file and put this code inside it.

.env
```
REACT_APP_SERVER_DOMAIN='<server_domain>' # example 'http://localhost:8080'
```


After that create a file in the Server Folder with the name config.js and put the below code inside it.

config.js
```
export default {
    JWT_SECRET : "<secret>",
    EMAIL: "steve.franecki@ethereal.email", // testing email & password from ethereal account
    PASSWORD : "sMf46xCzrvdrxvuagc", 
    ATLAS_URI: "<MONGODB_ATLAS_URI>"
}
```

> **Note:** The **ATLAS_URI** is important to work this project.

Now, create all these variables in the project and make sure you set ATLAS_URI variable.
Otherwise, the project will not work.

Now change your current directory to client :
```
cd client
```


and run this command to install the dependencies :
```
npm install
```


Go back to the main folder of your project:
```
cd ..
```


change your directory to server:
```
cd server 
```


and install the dependencies:
```
npm install
```

Now finally run the client and server after going into each of the directories in two different terminals one by one using :
```
npm start
```





