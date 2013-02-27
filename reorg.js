var express = require('express'),
    app = express();

app.use(express.logger());
app.use(express.bodyParser());

var http = require('http'),
	https = require('https');

app.use(express.cookieParser());
app.use(express.cookieSession({
	key: "sid",
	secret: "tweets"
}));

var fsclientId = "VU0DICU13IR5L5YWZ23OGBCIMSUA2CCQILVXMV2QRQGRGKHN";
var fsclientSecret = "3UB2V5MNWB0QUCGNA5DDIH05YU0BSOOE0DI05GISLLWWGN0D";

var twclientId = "Bt2qpXMrCsbctcTSwxVU8Q";
var twclientSecret = "j2EweBmhK7cknxr3WvIAZLl1SjVs7YmDKd0k66okVdA";

function User(id, tweets){
	this.id = id;
	this.tweets = tweets;
	//this.lat = lat;
	//this.lng = lng;
}

function Tweet(id, text, username, image, geo){
	this.id = id;
	this.text = text;
	this.username = username;
	this.image = image;
	this.geo = geo;
}

function TweetQuery(keyword, lat, lon, radius){
	this.keyword = keyword;
	this.lat = lat;
	this.lon = lon;
	this.radius = radius;
	console.log(this.radius);
	this.time = new Date();
	this.setTime = function(setTime){
		this.time = setTime;
	};
}

