import {MongoClient} from 'mongodb';


//  /api/new-meetup
//  POST /api/new-meetup
// jika request terkirim ke url ini
// maka jalakan function dibawah 


async function handler(req,res) {
  console.log('execute')
   // req => contains about the incoming request
// res => will be needed for sending back a response

// check if we are receiving a post
if(req.method === 'POST'){
  const data = req.body;
  
  // 4 fields expecting the incoming request body 
  // const {title, image, address, description} = data;
   
  const client = await MongoClient.connect(
    'mongodb+srv://RidhoRay:Tsubatsa@cluster0.knrmv1q.mongodb.net/meetups?retryWrites=true&w=majority'
    )
  const db = client.db()
  
  const meetupsCollection = db.collection('meetups')
  
  
  const result = await meetupsCollection.insertOne(data)
  
  console.log(result);
  
  client.close();
  
  // giving the response
  res.status(201).json({message: 'Meetup inserted!' });
  }
  
  }

  



export default handler;