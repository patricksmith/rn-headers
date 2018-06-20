This repo is used to demonstrate a bug I was experiencing in React Native wherein
HTTP headers with the same name were being discarded.

This repo has two directories -- one for a webserver that replicates a service
that returns multiple `Link` headers and one for a simple react-native app that
consumes that service.

To run the server:

```
$ cd server
$ yarn
$ node app.js
```

The server will run on port 5000 by default.

To run the app, build with `react-native run-android` and replace line 25
of `App.js`

    const hostname = 'http://sheltered-dawn-78797.herokuapp.com'

to the hostname of whereever the server is running.
