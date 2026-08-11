"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, Ellipsis,Trash2, ListCheck, Sigma} from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import EditTask from "@/components/ui/edit-task"
import AlertComp from "@/components/ui/alert-comp"
import { getTasks } from "@/actions/get-task-from-db"
import { useEffect, useState, useTransition } from "react"
import { Task } from "@/generated/prisma/client"


const Home = () => {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [, startTransition] = useTransition()

  const handleGetTasks = () => {
    startTransition(async () => {
      const tasks = await getTasks()
      setTaskList(tasks)
    })
  }
  useEffect(() => {
    handleGetTasks()
  }, [])
  
  return ( 
    <main className="w-full h-screen bg-black flex justify-center items-center">
     
      <Card className="w-lg p-4">
        <CardContent className="flex gap-2">
      <Input placeholder="Adicionar Tarefa"></Input> 
      <Button className="cursor-pointer"><Plus />Cadastrar </Button>
        </CardContent>
    <Separator  className="mb-4"/>
    <div className="flex gap-2">
      <Badge className="cursor-pointer" variant="default"><List /> Todas</Badge>
      <Badge className="cursor-pointer" variant="outline"><Ellipsis /> Não Finalizadas</Badge>
      <Badge className="cursor-pointer" variant="outline"><Check/> Concluidas</Badge>
    </div>

    {taskList.map(task => (<div className="  px-0 py-0 border-b-1  " key={task.id}>
      <div className=" h-14 flex justify-between items-center  border-t-1">
        <div className="w-1 h-full bg-green-300"></div>
        <p className="flex-1 px-2 text-sm">{task.task}</p>
        <div className="flex items-center gap-2">
          <EditTask />
          <Trash2 size={16} className="cursor-pointer"/>
        
        </div>
      </div>
    </div>))}

<div className="flex justify-between  items-center">


<div className="flex  gap-2 ">
  <ListCheck  size={14}/>
  <p className="text-xs">Tarefas concluidas (3/3)</p>


</div>

<AlertComp />


</div>

<div className="h-2 w-full bg-gray-100 rounded-md">
  <div className="h-full  bg-blue-500 rounded-md" style={{width: "50%"}}></div>
</div>
    
    <div className="flex items-center justify-end mt-2 gap-2">
      <Sigma size={14}/><p className="text-xs">3 Tarefas pendentes</p>
    </div>



</Card>
    </main>
  )
}

export default Home
