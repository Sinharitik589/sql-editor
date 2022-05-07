# SQL Editor View

A sql editor view made with ReactJS using [Create React App](https://github.com/facebook/create-react-app) for easily quering SQL and utilising the result.
## Demo
Please do visit [this link](https://sqleditorp.netlify.app/) for demo.
| NOTE: For the demo purpose queries cant be written to the text area , it can only be selected from the set of queries |
| --- |
## How to run locally
Clone the project and then run `npm install` which will install all the required dependencies and then `npm start` to start the project.
## Page Speed
The lighthouse in google chrome dev tools was used to calculate the page speed  and can also be checked by using [this online tool](https://pagespeed.web.dev/report?url=https%3A%2F%2Fsqleditorp.netlify.app%2F) . Page load time came out to be **2.2 sec**
## Page Load Optimization
Optimization of page load time is very important for a good user experience and for this two major issue was faced .
### JS Bundle Size
This being a SPA , the whole bundle of javascript was shipped to the user during initial rendering which was causing increase in page load time.
The main task was to eliminate the javascript from the main bundle that was not needed by the user at the time of initial render .This can be achieved by dynamic importing the javascript at the time of need .This project uses [File Saver](https://www.npmjs.com/package/file-saver) and [XLSX](https://www.npmjs.com/package/xlsx)
for exporting data to a csv or json file , the functionality was needed when the user wanted to export the data so using the concept of [**lazy**](https://www.npmjs.com/package/xlsx) the javascript bundle size was reduced from 800 KB to 500 KB
### Unused CSS
Unused css is a pain for all the projects and so was for this , this project uses [FontAwesome](https://fontawesome.com/) for showing icons which was first loaded via CDN giving very less control on which parts to use , then firstly i used it locally which build a css file of 84 kb which was then reduced to 11kb using [purgecss](https://purgecss.com/)
### Page Load Time Before Optimisation

![preoptimised](https://user-images.githubusercontent.com/67551927/167253827-0bc92ad0-f24d-4b03-b016-494c4c35cdc3.jpg)

### Page Load Time After Optimisation


![postoptimisation](https://user-images.githubusercontent.com/67551927/167253821-1d6341a3-e1d3-4cc7-9460-7a875f41f30e.jpg)
