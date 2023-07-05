
"use client"
const TodoItem = ({id, title, complete, updateTodo}:{id:string, title:string, complete:boolean, updateTodo:(id:string, complete:boolean)=>void}) => {
    return (
           <>
               <li className="flex gap-1 ">
                 <input 
                     type="checkbox"
                     id={id}
                     className="cursor-pointer peer"
                     defaultChecked = {complete}
                     onChange={e=>updateTodo(id, e.target.checked)}
                 />
                 <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
               </li>
           </>
           )
}
export default TodoItem
