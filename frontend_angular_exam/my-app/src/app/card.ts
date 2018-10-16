export class Card {
    id: number;
    title: string;
    assignedTo: string;
    startDate: Date;
    dueDate: Date;
    description: string;
    priority: number;
    tags: Object;
    boardColumn: string;
    completed: boolean;
}