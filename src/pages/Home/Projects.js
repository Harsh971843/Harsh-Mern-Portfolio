import React from 'react';
import Sectiontitle from '../../components/Sectiontitle';
// import { project } from '../../Resources/project';
import { useSelector } from 'react-redux';

function Projects() {
    const [select, setSelect] = React.useState(0); // Fixed variable name
    const {portfoliodata} = useSelector((state) => state.root);
    const {project} = portfoliodata;
    // const {projectname, projectlink , projectskills , projectdesc} = project;
    return (
        <div className='py-10 sm:py-0'>
            <Sectiontitle title="Projects" />
            <div className='flex flex-row sm:justify-center  gap-5 py-10'>
                {/* Render project dates for selection */}
                {project.map((projectschema, index) => (
                    <div key={index} onClick={() => setSelect(index)} className='cursor-pointer'>
                        <h1 className={`text-secondary sm:text-xl font-semibold ${select === index ? "text-white" : "text-secondary"}`}>
                            {projectschema.Date}
                        </h1>
                    </div>
                ))}
            </div>

            {/* Display selected project details */}
            <div className='flex  items-start flex-col gap-7 sm:items-center'>
                <h1 className='text-tertiary text-2xl sm:font-semibold'>{project[select].Project_name}</h1>
                <h1 className='text-secondary sm:font-semibold'>{project[select].Tools}</h1>
                <p className='text-lime-300 font-semibold '>{project[select].Link}</p>
                <p className='text-white flex-wrap '>{project[select].Description}</p>
            </div>
            <div className='bg-secondary
             w-[100] h-[2px] my-20 mb-0 sm:my-10' >
        
            </div>
        </div>
    );
}

export default Projects;
