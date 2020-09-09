# Test application

## requirements

node 8+ & npm 6+ installed (use nvm if not installed yet https://github.com/nvm-sh/nvm)

**To start the backend server**
`cd backend`
`node server.js`

--> will be accessible at *localhost:4000*

To start the frontend
 `npm start`

--> *localhost:3000*

(2 consoles needed as the 2 are running in parallel)


## Exercise

The idea is not to re-create a react app from scratch, but complete 3 tasks inside an already existing React Component.

**You only need to work in MainView.js**

1) add a query in the component's lifecycle

The query needs to fetch the endpoint:
http://localhost:4000/userinfos
and get the json data from it.
This json contains a list of the users that are signed up.

2) use this json and the "list" table already in the component to display the 6 users and their signed up status in the ReactList component

Use the *ReactList* component and the *_renderItem* method
you can read about react-list on https://github.com/caseywebdev/react-list#readme

 - Show a green tick if they are signed up, or a red cross if not (use `<TrueMark/`> and `<FalseMark/>`) in the second column.
 - The users have to be displayed sorted:
	  - the users signed up have to come first
	  - in alphabetical order

example :
```markdown
| Nom     | Inscrit? |
|---------|----------|
| Anna    | V        |
| Gabriel | V        |
| Benoit  | X        |
| Roger   | X        |
```

3) add a handler so that when a row is clicked it displays the name of the user in the console.
