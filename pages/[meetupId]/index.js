import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail() {
    return(
        <MeetupDetails image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
         title="A First Meet Up" 
         address="Some Street 5, Some City"
         desc="The meetup description"  />
    )

}



export async function getStaticPaths(){
    return{
        // falbback agar tidak error
        // fallback set false => kadi bila user mengetik di url m3
        // maka akan me return 404
        fallback: false,
        // which page should be pre-generated
        paths: [
            // you must have multiple object
            {params: {
                // we would add value for meetup id
                // for which this page should be pre-generated 
                meetupId: 'm1'
            }},
            {params: {
                // we would add value for meetup id
                // for which this page should be pre-generated 
                meetupId: 'm2'
            }}

        ]
        }
    
}


export async function getStaticProps(context){
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    // meetupId => dapet dari nama folder [square bracket]

    console.log(meetupId)

    return{
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                id: meetupId,
                title: 'First Meetup',
                address:"Some Street 5, Some City",
                description: "The meetup description",
            }
        }
    }
}


export default MeetupDetail;