import Head from 'next/head';
import MeetUpList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';





function HomePage(props){


    return (
     <Fragment>
      <Head>
         <title>React Meetups</title>
         <meta
            name='description'
            content='Browse a huge list of highly active React Meetups!'
         />
      </Head>
     <MeetUpList meetups={props.meetups} />
     </Fragment>

)
}


// Cara baru untuk mengenrate setiap request
// export async function getServerSideProps (context) {
//    // The diferennce to get static props => this function will now
//    // not run during the build procces but instead on the server after deployment
//    const req = context.req;
//    const rest = context.res;

   
//    // me return object
//    // karena semuanya hanya untuk mendapatkan props dari component page ini
//    return{
//       props: {
//          meetups : DUMMY_MEETUPS
//       }
//    };
// }


// GETSERVERSIDE PROPS VS GETSTATIC PROPS


// Spesial function for waiting data  to fetch
export async function getStaticProps(){
// Fetch data grom an API
const client = await MongoClient.connect(
   'mongodb+srv://RidhoRay:Tsubatsa@cluster0.knrmv1q.mongodb.net/meetups?retryWrites=true&w=majority'
   )
 const db = client.db()
 
 const meetupsCollection = db.collection('meetups')
 
const meetups = await meetupsCollection.find().toArray();

client.close()

// Return the Object
return{
   props: {
      // use colecction here
      meetups: meetups.map(meetup => ({
         title:meetup.title,
         address:meetup.address,
         image:meetup.image,
         id: meetup._id.toString(),        
      }))
   },
   revalidate: 1
};

}

export default HomePage;