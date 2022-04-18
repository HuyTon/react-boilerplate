# Boilerplate Project Structure

## Assets Folder
As the name says, it contains assets of project. It consists of images and styling files. Here we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also. But that depends on developer comfortability.

## Components Folder
Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project. Components folder only for reusable components. Each component should consist of a test file to do a unit test as it will be widely used in the project.

## Pages Folder
The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation. It usually consists of various components grouped. Every product's feature should have its separate folder and every folder will contain two parts are Containers and Views.
- Containers: the components grouped handle business logic of product's feature and render data via components of Views.
- Views: here's where the main part of your app will live, in the views directory. It represents the UI will display to end users.

## Utilities Folder
Utilities folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.

## Services Folder
Service folder contains all services that take care of the communication between the React application (frontend) and an API (backend). A single service provides multiple functions to retrieve data from or post data to an external service using the HTTP protocol. 

## Store
The global data store will be contained in the store directory - in this case, Redux. Each feature will have a folder, which will contain the Redux Toolkit slice, as well as actions and tests. This setup can also be used with regular Redux, you would just create a .reducers.js file and .actions.js file instead of a slice. If you're using sagas, it could be .saga.js instead of .actions.js for Redux Thunk actions.

Ex:
.
└── /src
    ├── /store
    │   ├── /authentication
    │   │   ├── /authentication.slice.js
    │   │   ├── /authentication.actions.js
    │   │   └── /authentication.test.js
    │   ├── /authors
    │   │   ├── /authors.slice.js
    │   │   ├── /authors.actions.js
    │   │   └── /authors.test.js
    │   └── /books
    │       ├── /books.slice.js
    │       ├── /books.actions.js
    │       └── /books.test.js
    ├── rootReducer.js
    └── index.js