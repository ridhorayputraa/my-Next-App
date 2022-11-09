// our-domain.com/new-meetup

import { useRouter } from 'next/router';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage(){
 const router = useRouter();


  async  function addMeetupHandler(enterMeetupData){
        // sent request to api routes
       const response = await fetch('/api/new-meetup',{
        method: 'POST',
        body: JSON.stringify(enterMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
       });

       const data = await response.json();
       console.log(data)

       router.push('/');
    }

    return <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetUpPage
