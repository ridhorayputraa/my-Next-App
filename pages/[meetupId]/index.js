import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail(props) {
    return(
        <MeetupDetails 
        image={props.meetupData.image}
         title={props.meetupData.title} 
         address={props.meetupData.address}
         desc={props.meetupData.description}  />
    )

}



export async function getStaticPaths(){
   const client = await MongoClient.connect(
        'mongodb+srv://RidhoRay:Tsubatsa@cluster0.knrmv1q.mongodb.net/meetups?retryWrites=true&w=majority'
        )
      const db = client.db()
      
      const meetupsCollection = db.collection('meetups')
      
     const meetups = await meetupsCollection.find({}, {_id: 1 }).toArray();
     

client.close();

    return{
        // falbback agar tidak error
        // fallback set false => kadi bila user mengetik di url m3
        // maka akan me return 404
        fallback: false,
        // which page should be pre-generated
        paths: meetups.map((meetup) => ({
                params: {meetupId: meetup._id.toString()},
        }))
        
    
        
        // [
        //     // you must have multiple object
        //     {params: {
        //         // we would add value for meetup id
        //         // for which this page should be pre-generated 
        //         meetupId: 'm1'
        //     }},
        //     {params: {
        //         // we would add value for meetup id
        //         // for which this page should be pre-generated 
        //         meetupId: 'm2'
        //     }}

        // ]
    }
    
}


export async function getStaticProps(context){
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    // meetupId => dapet dari nama folder [square bracket]

    const client = await MongoClient.connect(
        'mongodb+srv://RidhoRay:Tsubatsa@cluster0.knrmv1q.mongodb.net/meetups?retryWrites=true&w=majority'
        )
      const db = client.db()
      
      const meetupsCollection = db.collection('meetups')
      
     const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    })



client.close();

    return{
        props: {
            meetupData:{
                id : selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        }
    }
}


export default MeetupDetail;