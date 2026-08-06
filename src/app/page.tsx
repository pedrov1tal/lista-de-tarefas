import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, Ellipsis, SquarePen} from "lucide-react"




const Home = () => {
  return ( 
    <main className="w-full h-screen bg-black flex justify-center items-center">
     
      <Card className="w-lg p-4">
        <CardContent className="flex gap-2">
      <Input placeholder="Adicionar Tarefa"></Input> 
      <Button className="cursor-pointer"><Plus />Cadastrar </Button>
        </CardContent>
    <Separator />
    <div className="flex gap-2">
      <Badge className="cursor-pointer"><List /> Todas</Badge>
      <Badge className="cursor-pointer"><Ellipsis /> Não Finalizadas</Badge>
      <Badge className="cursor-pointer"><Check/> Concluidas</Badge>
    </div>
    <div className="bg-red-500 ">
      <div className="bg-green-200 h-8 flex justify-between">
        <div className="w-2 h-full bg-amber-100"></div>
        <p >Estudar React</p>
        <div><SquarePen/></div>
      </div>
    </div>

</Card>
    </main>
  )
}

export default Home