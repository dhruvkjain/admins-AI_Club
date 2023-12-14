import React from "react";

const Projectslist = ({mappedProjects})=>{

    return(
        <div className="">
            <div className="projects flex flex-wrap">
                {
                    mappedProjects.map((project,i)=>{
                        if(project != null){
                            return(
                                <div className="project rounded-2xl p-3 mt-5">
                                <div className="projectcover w-fit datalistbg custom-box-shadow rounded-2xl">
                                    <div className="projectimgcover"><img className="projectimg rounded-2xl w-80 p-2" src={project.imgurl}></img></div>
                                    <div className="flex h-fit justify-center items-center">
                                    <div>
                                    <h1 className="mb-2 text-3xl projecttitle">{project.title}</h1>
                                    <p className="mb-5 text-xl projectbywhom">{project.bywhom}</p>
                                    <p className="mb-3 projectdes">{project.description}</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default Projectslist;