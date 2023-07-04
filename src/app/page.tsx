import Link from "next/link"

export default function Home() {
  return (
   <> 
       <header className="justify-between flex border items-center mb-4">
           <h1 className="text-2xl">Todos</h1> 
           <Link className="border rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700" href={'/new'}>
               New 
           </Link>
       </header>
       <ul className="p-4"></ul>

   </>
  )
}
