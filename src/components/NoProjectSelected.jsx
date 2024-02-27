import noProjectImage from '../assets/no-projects.png';
import Buttons from './Buttons';

export default function NoProjectSelected() {
   return (
      <div className='flex flex-col items-center mt-24 w-2/3'>
         <img 
            src={noProjectImage} 
            alt="An empty task list" 
            className="w-16 h-16 object-contain max-auto"
         />
         <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
         <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
         <p className='mt-8'>
            <Buttons>Create a new project</Buttons>
         </p>
      </div>
   );
}