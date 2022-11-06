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
export default MeetupDetail;