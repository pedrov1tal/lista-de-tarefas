import { SquarePen } from "lucide-react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"

const EditTask = ()  => {

return (
    <Dialog>
  <DialogTrigger
    render={
      <Button variant="ghost" size="icon-sm" className="cursor-pointer" />
    }
  >
    <SquarePen size={16} />
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Editar tarefa</DialogTitle>
      
    </DialogHeader>
    <div className="flex gap-2 ">
      <input  placeholder="Editar" className="w-[100%]"/>
      <Button className="cursor-pointer">Editar</Button></div>
  </DialogContent>
</Dialog>
)
}

export default EditTask