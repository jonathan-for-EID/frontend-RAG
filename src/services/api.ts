import type { IngestResult, AskResult, Provider } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'https://localhost:7167';

function headers(provider: Provider): Record<string, string> {
  const apiKey = sessionStorage.getItem('rag-api-key') ?? '';
  return {
    'Content-Type': 'application/json',
    'X-Provider': provider,
    'X-Api-Key': apiKey,
  };
}

export async function ingest(text: string, provider: Provider): Promise<IngestResult> {
  const res = await fetch(`${BASE_URL}/ingest`, {
    method: 'POST',
    headers: headers(provider),
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`Ingest failed: ${res.status}`);
  return res.json();
}

export async function reset(provider: Provider): Promise<void> {
  const res = await fetch(`${BASE_URL}/reset`, {
    method: 'DELETE',
    headers: headers(provider),
  });
  if (!res.ok) throw new Error(`Reset failed: ${res.status}`);
}

export async function ask(question: string, provider: Provider): Promise<AskResult> {
  const res = await fetch(`${BASE_URL}/ask`, {
    method: 'POST',
    headers: headers(provider),
    body: JSON.stringify({ question }),
  });
  if (!res.ok) throw new Error(`Ask failed: ${res.status}`);
  return res.json();
}
