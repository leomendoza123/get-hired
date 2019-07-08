export interface Person {
    name?: string;
    email?: string;
    phone?: string;
    progress?: number;
    answears?: [
        {
            questionId: string;
            answearsId: string;
            timeToResponde: number;
        }
    ];
    results?: {
        score: number;
        totalTime: number;
    };

};