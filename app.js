const express=require("express");
const mongoose=require("mongoose");
const session=require("express-session");
const MongoStore=require("connect-mongo");

const app=express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/movie_review_app", 

