/*
Levy Lecture 14/ lab8
Emily 
COULD NOT GET EKENES INFO TO EXPORT AND USE


//take in ekene's authent files information
var store= require("store");

var http = require("http");
var qString = require("querystring");
//var mongoClient = require("mongodb").MongoClient;
//this calls the let db={}; and instantiates the db for us
let dbManager = require('./dbManager'); 
//local mongo instance
var url = "mongodb://127.0.0.1:27017/"
const client = new mongoClient(url);



function docifyLogin(params){
    let doc = {username: params.username, type: params.type, size: params.size, price: params.price};
    return doc;
}

//USED for Purchases

//function docifyPurchases(params){
//	let cart = {user: params.user, type: params.type, mf: params.mf, size: params.size, price: params.price}
//	return cart;
//}
{
   
	
http.createServer(
async  (req, res)=>{
    console.log(req.method);
    let baseURL = 'http://' + req.headers.host;
    var urlOBJ = new URL(req.url, baseURL );
    
    if (req.method == "POST"){
	
	var postData = '';
	req.on('data', (data) =>{
		postData+=data;
	    });
	
	//labeling a  callback as async will allow us to wait for promise
	//fulfillment inside the function
	req.on('end', async ()=>{
		console.log(postData);
		let calories;
		let proceed = true;
		var postParams = qString.parse(postData);
		//handle empty data
	
		if (proceed){
		    let col = dbManager.get().collection("clothing");
		    //on the insert page
		    if (urlOBJ.pathname=="/insert"){
			
			
			   
			    var curAuthent = new authent(
                             postParams.username,
                             postParams.type,
							 postParams.mf,
                             postParams.size,
                             postParams.price,
							 );
			  			 
			    //convert params to a document for Mongo
			    let Docs = docifyLogin(postParams);
	
			    //insert the document into the db
			    let result = await col.insertOne(Docs);
				
			    console.log(result); //log result for viewing
				}
			}
			*/