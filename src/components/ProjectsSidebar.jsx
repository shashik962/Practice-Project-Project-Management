import Buttons from "./Buttons.jsx";

export default function ProjectsSidebar({ onStartAddProject }) {
   return (
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
         <h2 class="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
         <div>
            <Buttons onClick={onStartAddProject}>
               + Add Project
            </Buttons>
         </div>
      </aside>
   );
}