import { prisma } from "@/db"
import Link from "next/link"

const getTodos = () => prisma.todo.findMany()

export default async function Home() {
  const todos = await getTodos() 
  // await prisma.todo.create({data:{title:'todoggo',complete:false}})

  return (
   <> 
       <header className="justify-between flex border items-center mb-4">
           <h1 className="text-2xl">Todos</h1> 
           <Link className="border rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700" href={'/new'}>
               New 
           </Link>
       </header>
       <ul className="p-4">
         {todos.map(todo=>{
                     return <TodoItem key={todo.id} {...todo} />
                 })}
       </ul>

   </>
  )
}

const TodoItem = ({id, title, complete}:{id:string, title:string, complete:boolean}) => {
    return (
           <>
               <li className="flex gap-1 ">
                 <input type="checkbox" id={id} className="cursor-pointer peer" />
                 <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
               </li>
           </>
           )
}
