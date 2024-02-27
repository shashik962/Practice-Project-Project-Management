import Buttons from "./Buttons.jsx";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
   return (
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
         <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
         <div>
            <Buttons onClick={onStartAddProject}>
               + Add Project
            </Buttons>
         </div>
         <ul className="mt-8">
            {projects.map((projects) => (
               <li key={projects.id}>
                  <button 
                     className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                     {projects.title}
                  </button>
               </li>
            ))}
         </ul>
      </aside>
   );
}