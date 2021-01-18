export interface IQuestBackgroundOption {
    QCFailedReason: string;
    QCFailedCode: number;
    Description: string;
}

export interface IQuestRevisionOption {
    QCFailedReason: string;
    QCFailedCode: number;
    Description: string;
}

export interface IQuestionnarieOptions {
    QuestBackgroundOptions: IQuestBackgroundOption[];
    QuestRevisionOptions: IQuestRevisionOption[];
}
