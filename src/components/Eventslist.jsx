import React from "react";
import Event from "./Event";


const Eventslist = ({ allEvents }) => {

    return (
        <div>
            <div key={Math.random()}>
                {
                    allEvents.map((data, i) => {
                        return (
                            <Event data={data} ></Event>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Eventslist;