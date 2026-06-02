export interface IngestResult {
  chunksCount: number;
  totalTokens: number;
  durationMs: number;
}

export interface AskResult {
  answer: string;
  chunksRetrieved: number;
  scores: number[];
  durationMs: number;
}

export interface MessageMeta {
  chunksRetrieved: number;
  scores: number[];
  durationMs: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  meta?: MessageMeta;
  timestamp: number;
}

export type Step =
  | 'idle'
  | 'embedding'
  | 'searching'
  | 'generating'
  | 'done';

export type Provider = 'Mistral' | 'Claude';

export const PROVIDERS: { value: Provider; label: string }[] = [
  { value: 'Mistral', label: 'Mistral (hébergé)' },
  { value: 'Claude',  label: 'Claude Opus (Anthropic)' },
];
