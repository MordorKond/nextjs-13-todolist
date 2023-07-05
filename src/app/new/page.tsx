import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/db";

const createTodo = async (data:FormData)=>{
    "use server"
    const title = data.get('title')?.valueOf()
    if(typeof title !== 'string' || title.length===0){
        throw new Error('title is undefined')
    }
    await prisma.todo.create({data:{title, complete:false}})
    redirect('/')
}

export default function Page(){
    return (
            <>
                <header className="justify-between flex border items-center mb-4">
                    <h1 className="text-2xl">New</h1> 
                </header>
                <form action={createTodo}  className="flex border flex-col gap-2">
                    <input name="title" type="text" className="border rounded border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100" />
                    <div className="flex gap-1 justify-end">
                        <Link className="border rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700" href={'..'}>
                            Cancel
                        </Link>
                        <button type="submit" className="border rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700" >
                            Create
                        </button>
                    </div>
                </form>
            </>
           )
}
