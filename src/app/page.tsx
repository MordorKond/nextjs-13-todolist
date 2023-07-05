import TodoItem from "@/components/TodoItem.component"
import { prisma } from "@/db"
import Link from "next/link"

const getTodos = () => prisma.todo.findMany()

const updateTodo = async (id:string, complete:boolean) => {
   "use server"
   await prisma.todo.update({where:{id},data:{complete}})
}
export default async function Home() {
  const todos = await getTodos() 

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
                 return <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} />
                 })}
       </ul>

   </>
  )
}

