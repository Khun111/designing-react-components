import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";


function Speakers({}) {
  return (
    <SpeakerFilterProvider>
      <SpeakersToolbar/>
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
