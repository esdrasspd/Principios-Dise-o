import { ITaskRepository } from './ITaskRepository';
import { Task } from './Task';

// Dependency Inversion Principle (DIP): La clase TaskService depende de la abstracción ITaskRepository en lugar de una implementación concreta.
// Esto permite cambiar la implementación del repositorio sin afectar el servicio.
export class TaskService {
    constructor(private taskRepository: ITaskRepository) {}

    createTask(title: string): Task {
        const task = new Task(title);
        this.taskRepository.addTask(task);
        return task;
    }

    completeTask(title: string): void {
        const task = this.taskRepository.findTaskByTitle(title);
        if (task) {
            task.markAsCompleted();
        }
    }

    getTasks(): Task[] {
        return this.taskRepository.getAllTasks();
    }
}
