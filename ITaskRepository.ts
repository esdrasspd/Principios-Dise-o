
import { Task } from "./Task";
// Interface Segregation Principle (ISP): La interfaz ITaskRepository define solo las operaciones necesarias para gestionar tareas.
// Los clientes que implementan esta interfaz no están obligados a implementar métodos que no necesitan.
export interface ITaskRepository {
    getAllTasks(): Task[];
    addTask(task: Task): void;
    findTaskByTitle(title: string): Task | undefined;
}
