import React from "react";

const Resourceslist =({mappedResources})=>{
    return(
        <div className="">
            <div>
                {
                    mappedResources.map((resource,i)=>{
                        if(resource != null)
                        {
                            return (
                                <div className="pr-4 pl-4 m-4 mt-6 datalistbg custom-box-shadow rounded-2xl">
                                    <div className="text-[30px] text-center">#{resource.theme}</div>
                                    <div className="text-left pb-2">{resource.description}</div>
                                </div> 
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Resourceslist;