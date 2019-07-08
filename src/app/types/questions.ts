export interface Answers {
    id: string;
    uiId?: number;
    value: string;
}

export interface Questions {
    id: string;
    value: string;
    answers: [
        Answers
    ];
}
