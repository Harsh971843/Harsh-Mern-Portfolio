import React from 'react';
import Sectiontitle from '../../components/Sectiontitle';
import { project } from '../../Resources/project';

function Projects() {
    const [select, setSelect] = React.useState(0); // State for managing selected project

    return (
        <div className='py-10 sm:py-0'>
            {/* Title Section */}
            <Sectiontitle title="Projects" />
            {/* Project Selection Menu */}
            <div className='flex flex-row sm:justify-center gap-5 py-10'>
                {project.map((projectschema, index) => (
                    <div 
                        key={index} 
                        onClick={() => setSelect(index)} 
                        className='cursor-pointer'>
                        <h1 className={`text-secondary sm:text-xl font-semibold ${select === index ? "text-white" : "text-secondary"}`}>
                            {projectschema.Date}
                        </h1>
                    </div>
                ))}
            </div>
            {/* Selected Project Details */}
            {project[select] && (
                <div className='flex items-start flex-col gap-7 sm:items-center'>
                    <h1 className='text-tertiary text-2xl sm:font-semibold'>{project[select].Project_name}</h1>
                    <h1 className='text-secondary sm:font-semibold'>
                        Tools: {project[select].Tools.join(", ")}
                    </h1>
                    <a 
                        href={project[select].Link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='text-lime-300 font-semibold underline'>
                        {project[select].Link}
                    </a>
                    <p className='text-white'>{project[select].Description}</p>
                </div>
            )}
            {/* Separator */}
            <div className='bg-secondary w-full h-[2px] my-20 sm:my-10'></div>
        </div>
    );
}

export default Projects;
