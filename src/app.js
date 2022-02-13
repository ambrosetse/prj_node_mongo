var express = require('express') 
const {MongoClient} = require('mongodb');

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = "mongodb://ambrose:123qwe@db/test";
const client = new MongoClient(uri);

async function main(){
	try {
		// Connect to the MongoDB cluster
		await client.connect();
		console.log("Connected");

	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}
var app = express() 

//main();
client.connect().then(client => {
	app.get('/', function (req, res) { 
		client.db("test").collection("sample").find({}).toArray().then(result => {
			res.send(JSON.stringify(result))
		});
	}) 
});


app.listen(8081, function () { 
	console.log('app listening on port 8081!') 
})
