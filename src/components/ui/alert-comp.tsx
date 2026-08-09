
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog"
import { Trash2 } from "lucide-react"
import { Button } from "./button"

const AlertComp = () => {
return  (
       <AlertDialog>
  <AlertDialogTrigger
  render={
    <Button
      className="text-xs h-7 cursor-pointer"
      variant="outline"
    />
  }
>
  <Trash2 />
  Limpar tarefas concluídas
</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Tem certeza que deseja excluir ?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction variant="outline">Sim</AlertDialogAction>
      <AlertDialogCancel variant="default">Não</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    )
}

export default AlertComp