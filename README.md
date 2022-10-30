# Lemoncode Module 4 - React

This is an example of a web application developed with React.

Run "npm start" for a dev server. Navigate to http://localhost:8080/. The application will automatically reload if you change any of the source files.

To test the application, you can use the credentials: admin@admin.com / 123456

From the toolbar you can access the github list or the Rick and Morty list.

This example page consists of 5 different scenes:

- Login
- Github users list
- Github user detail
- Rick and Morty characters list
- Rick and Morty character detail

By doing this exercise, the following functionalities have been practiced:
- Query two different APIs and display the result (list and detail).
- Implement a search engine that allows you to change the organization of github.
- Use a debounce hook in the searcher.
- Material UI.
- Context has been implemented to keep the organization search parameter available throughout the app.
- Worked with routes.
- Pagination has been added to the result lists. Two types of pagination:
    - One in the part of the client, in which all the results are obtained and they are organized in pages dynamically.
    - Another, in which for each page a query is made to the API to return 20 by 20 results each time the page is changed.   