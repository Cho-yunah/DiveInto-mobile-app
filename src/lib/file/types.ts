export type OnInit = () => void;
export type OnProgress = (written: number, total: number) => void;
export type OnSuccess = (data?: Object) => void;
export type OnError = (e: Error) => void;
