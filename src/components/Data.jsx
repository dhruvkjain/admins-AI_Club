import React from "react";
import Eventslist from "./Eventslist";
import Resourceslist from "./Resourceslist";
import Projectslist from './Projectslist';

function Data( {propevents, proprojects, propresources} ){
    return(
        <div>
            <div className='grid grid-cols-2'>
              <Eventslist allEvents={propevents} />
              <Resourceslist mappedResources={propresources} />
            </div>
            <div className=''>
              <Projectslist mappedProjects={proprojects} />
            </div>
          </div>
    )
}

export default Data;