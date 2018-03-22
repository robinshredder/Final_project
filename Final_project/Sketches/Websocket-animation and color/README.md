<h1> Websocket-animation </h1>
Author: Alexander Grövnes

With this websocket you can make a circle change colors and make it move with anime.js.

# Setup

 Open terminal and write 

`$ cd <i>put web socket file here</i>
then
`$ npm install`

This will install the necessary packages from npm.


# Running

Once set up, you can boot up your server with

`$ npm start`
By typing npm start you will open a personal localhost, for ex. localhost:4440
To open localhost on another device write your IP adress ex. 192.168.0.105:4440 in the browser.
It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac).

Websocket is built with the help of animation library animeJS.



```bash
$ npm install animejs



import anime from 'animejs'
```

Or manually [download](https://github.com/juliangarnier/anime/archive/master.zip) and link `anime.min.js` in your HTML:

```html
<script src="anime.min.js"></script>
```
