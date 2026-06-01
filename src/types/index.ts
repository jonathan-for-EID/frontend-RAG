export interface IngestResult {
  message: string;
  chunksCount?: number;
  tokensTotal?: number;
  durationMs?: number;
}

export interface Source {
  text: string;
  score: number;
}

export interface AskResult {
  answer: string;
  sources?: Source[];
  durationMs?: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  timestamp: number;
}

export type Step =
  | 'idle'
  | 'embedding'
  | 'searching'
  | 'generating'
  | 'done';

export type Provider = 'Fake' | 'Mistral' | 'Claude';

export const PROVIDERS: { value: Provider; label: string }[] = [
  { value: 'Fake',    label: 'Fake (dev)' },
  { value: 'Mistral', label: 'Mistral (hébergé)' },
  { value: 'Claude',  label: 'Claude Opus (Anthropic)' },
];
