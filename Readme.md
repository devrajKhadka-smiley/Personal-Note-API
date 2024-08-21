## Personal Note API
The Personal Notes API is a RESTful service designed for managing personal notes. It enables users to create, read, update, and delete notes. These notes persisted by being stored in local JSON files, with various middleware functions utilized for logging requests, validating inputs, and handling errors.

### How To Setup the Program
1. Install the Modules that require to run the project
    
        npm install express, cors, nodemon

2. Then head over to the directory "__Task_API/src__". Then

        node --watch node.app

### Test API ENDPOINTS
* Get all notes: `api/notes`
* Get a Note By ID: `api/notes/:id`
* Add Note: `api/notes`
* Update a Note: `api/notes/:id`
* Delete a Note: `api/notes/:id`

### Postman URL and Body Request

        http://localhost:3000/api/notes