import { useState } from 'react';
import { ingest } from '../services/api';
import { useProvider } from '../context/ProviderContext';
import type { IngestResult } from '../types';

export function ConfigTab() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<IngestResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { provider } = useProvider();

  async function handleIngest() {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await ingest(text, provider);
      setLogs(prev => [result, ...prev]);
      setText('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-body">
      <div className="page-header">
        <div>
          <div className="page-title">Configuration</div>
          <div className="page-subtitle">Gérez les documents de la base de connaissances</div>
        </div>
      </div>

      <div className="config-layout">
        <div className="card">
          <div className="card-header">
            <span>📄</span>
            <span className="card-title">Ajouter un document</span>
          </div>
          <div className="card-body">
            <textarea
              className="doc-input"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Collez ou tapez votre document ici…"
              rows={8}
              disabled={loading}
            />
            <button
              className="btn btn-primary"
              onClick={handleIngest}
              disabled={loading || !text.trim()}
            >
              {loading ? '⏳ Ingestion…' : '⬆️ Ingérer le document'}
            </button>
          </div>
        </div>

        {error && (
          <div className="error-banner">
            ⚠️ {error}
          </div>
        )}

        {logs.length > 0 && (
          <div className="card">
            <div className="card-header">
              <span>📋</span>
              <span className="card-title">Logs d'ingestion</span>
            </div>
            <div className="card-body">
              <div className="log-list">
                {logs.map((log, i) => (
                  <div key={i} className="log-row">
                    <span className="log-icon">✓</span>
                    <span className="log-msg">{log.message}</span>
                    <div className="log-pills">
                      {log.chunksCount !== undefined && (
                        <span className="pill">{log.chunksCount} chunks</span>
                      )}
                      {log.tokensTotal !== undefined && (
                        <span className="pill">{log.tokensTotal} tokens</span>
                      )}
                      {log.durationMs !== undefined && (
                        <span className="pill">{log.durationMs} ms</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
