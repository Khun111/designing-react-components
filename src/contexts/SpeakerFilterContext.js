import React, { useState, createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();
function SpeakerFilterProvider ({children, startingShowSessions=false, startingEventYear='2019'}) {
    const {showSessions, setShowSessions, searchQuery, setEventYear, eventYear, setSearchQuery, EVENT_YEARS} = useSpeakerFilter(startingShowSessions, startingEventYear);
    return (
        <SpeakerFilterContext.Provider value={{showSessions, setShowSessions, searchQuery, setSearchQuery, eventYear, setEventYear, EVENT_YEARS}}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}
export { SpeakerFilterProvider };