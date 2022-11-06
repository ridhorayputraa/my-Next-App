import {MongoClient} from 'mongodb';


//  /api/new-meetup
//  POST /api/new-meetup
// jika request terkirim ke url ini
// maka jalakan function dibawah 


function handler(req,res) {
// req => contains about the incoming request
// res => will be needed for sending back a response

// check if we are receiving a post
if(req.method === 'POST'){
const data = req.body;

// 4 fields expecting the incoming request body 
const {title, image, address, description} = data;
MongoClient.connect('mongodb+srv://RidhoRay:Tsubatsa@cluster0.knrmv1q.mongodb.net/meetups?retryWrites=true&w=majority');

}

}

export default handler;