import React from "react";

const Event =({data})=>{
    
    return(
    <div className="pr-4 pl-4 m-4 mt-6 datalistbg custom-box-shadow rounded-2xl">
        <div className="text-left">
            <div className="text-[30px] text-center">{data.title}</div>
            <div className="">{data.description}</div>
            <a href={data.link} className="text-green-200 cursor-pointer underline eventlink">Find out more</a>
        </div> 

        <div className="">
        <div className="text-right mb-6 pb-2">{data.datetime}</div>
        </div>   
    </div>
    )
}
export default Event;