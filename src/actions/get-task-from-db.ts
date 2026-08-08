import {prisma} from "@/utils/prisma"

const getTasks = async () => {
const task = await  prisma.task.findMany
}