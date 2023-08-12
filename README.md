# ReactNodeExample

## testing new tech stack

resource: *<https://www.youtube.com/watch?v=w3vs4a03y3I&ab_channel=ArpanNeupane>*

1. create 2 folders: client and server
2. *cd server*
3. setup files in server: *npm init -y*
4. in package.json change "main" value to "server.js". Just better name
5. create file - *touch server.js*
6. install express - *npm i express*
7. nodemon with dependencies - for hot reload - *npm i nodemon -D*
8. add script to startup server - in package.json in "scripts" add lines:
"start": "node server",
"dev": "nodemon server"
9. cd client
10. create react project - *npx create-react-app .*
11. Install VS code extension - ES7+ React/Redux/React-Native snippets
12. remove boilerplate code:
all from App.cs
all from App.js
13. in App.js write *rfce* - Creates a React Functional Component with ES7 module system (ES7+ React/Redux/React-Native snippets)
click on tab
**- server modify**
14. add code to servers.js
*const express = require('express')*
*const app = express()*
*app.get("/ads", (req, res) => {*
    *res.json({ advertisementPlaces": ["TikTok", "Instagram", "Facebook"] })*
*})*
*app.listen(5000, () => { console.log("server started on port 5000") })*
15. in server folder - *npm run dev*
16. in browser type - *<http://localhost:5000/ads>*
**- react modify**
17. cd client
18. add into client package.json line *"proxy": "<http://localhost:5000>"*
19. add code into App.js
20. in cmd - *npm start*
21. in browser enter client address - *<http://localhost:3000/>*
22. check in browser by click f11 network responses of api. it shall be *{advertisementPlaces": ["TikTok", "Instagram", "Facebook"]}*
