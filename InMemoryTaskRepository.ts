import { ITaskRepository } from './ITaskRepository';
import { Task } from './Task';

// Open/Closed Principle (OCP): La clase InMemoryTaskRepository está cerrada para modificaciones pero abierta para extensiones.
export class InMemoryTaskRepository implements ITaskRepository {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    findTaskByTitle(title: string): Task | undefined {
        return this.tasks.find(task => task.title === title);
    }
}
