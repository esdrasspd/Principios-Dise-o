// Single Responsibility Principle (SRP): La clase Task tiene una única responsabilidad, que es gestionar el estado de una tarea.
export class Task {
    constructor(public title: string, public completed: boolean = false) {}

    markAsCompleted() {
        this.completed = true;
    }
}
