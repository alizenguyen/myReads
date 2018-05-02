# MyReads Project

MyReads is a Udacity React Nanodegree project emphasizing the topics of components, state management, react router, and lifecycle events. We were provided with a starter template that included static example of css and html. We were then tasked with adding interactivity to the app by refactoring the static code of the template using react. 

MyReads allow the user to store and categorize books between three shelves - currently reading, want to read, and read. The user can also add books to his or her shelf via a search page that interacts with a provided backend server. 

## The Setup

* `git clone https://github.com/alizenguyen/reactnd-myreads.git`
* cd to correlating folder
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Search Terms

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

`'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'`

## Demo

Main page where the user's saved books are located and organized between currently reading, want to read, and read categories. The user is able to change the shelf of the book on this page. 

<img src="./src/images/myReads-Main.gif" width="800">

Search page where the user can add books to his or her main page by adding it to a particular shelf. 

<img src="./src/images/myReads-Search.gif" width="800">
