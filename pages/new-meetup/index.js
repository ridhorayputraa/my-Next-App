// our-domain.com/new-meetup

import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage(){

    function addMeetupHandler(enterMeetupData){
        console.log(enterMeetupData);
    }

    return <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetUpPage
