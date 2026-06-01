type Tab = 'home' | 'chat' | 'config';

interface Props {
  onNavigate: (tab: Tab) => void;
}

export function HomePage({ onNavigate }: Props) {
  return (
    <div className="home-layout">
      <div className="home-content">

        <div>
          <div className="home-badge">Projet vitrine RAG</div>
          <h1 className="home-title">EID RAG Chat</h1>
          <p className="home-desc">
            Application de Q&A sur documents construite pour démontrer la maîtrise du pattern{' '}
            <span className="home-highlight">Retrieval-Augmented Generation</span> —
            de la vectorisation des documents jusqu'à la génération de réponse par un LLM,
            en passant par la recherche par similarité cosinus.
          </p>

          <div className="home-stack">
            <div className="stack-item"><span className="stack-icon">⚛️</span><span>React 19 + Vite 8</span></div>
            <div className="stack-item"><span className="stack-icon">⚙️</span><span>.NET 8 RAG API</span></div>
            <div className="stack-item"><span className="stack-icon">🖥️</span><span>Hébergement VPS</span></div>
            <div className="stack-item"><span className="stack-icon">🗄️</span><span>NoSQL (Elasticsearch)</span></div>
            <div className="stack-item"><span className="stack-icon">🟣</span><span>Claude Opus (chat)</span></div>
            <div className="stack-item"><span className="stack-icon">🟠</span><span>Mistral Embed + Chat</span></div>
            <div className="stack-item"><span className="stack-icon">🏗️</span><span>Pattern Strategy + Factory</span></div>
            <div className="stack-item"><span className="stack-icon">🔍</span><span>Similarité cosinus · Chunking · Tokenisation</span></div>
          </div>
        </div>

        <div className="home-sections">
          <div className="home-section">
            <div className="home-section-header">
              <span className="home-section-icon">⚙️</span>
              <div>
                <div className="home-section-title">Configurer la base de connaissances</div>
                <div className="home-section-sub">À faire avant de chatter</div>
              </div>
            </div>
            <p className="home-section-desc">
              Collez un document texte (procédure interne, note, rapport…).
              L'API le découpe en <strong>chunks token-aware</strong> via{' '}
              <code>ParagraphChunker</code>, vectorise chaque chunk avec{' '}
              <code>IEmbeddingService</code> (Mistral Embed) et stocke les vecteurs
              dans <code>InMemoryVectorStore</code>. L'embedding est toujours Mistral.
              Le choix du modèle LLM dans la sidebar n'affecte que la génération de réponse.
            </p>
            <button className="home-btn home-btn-primary" onClick={() => onNavigate('config')}>
              <span>📄</span> Configurer les documents
            </button>
          </div>

          <div className="home-section">
            <div className="home-section-header">
              <span className="home-section-icon">💬</span>
              <div>
                <div className="home-section-title">Discuter avec l'IA Jonathan</div>
                <div className="home-section-sub">Une fois les documents ingérés</div>
              </div>
            </div>
            <p className="home-section-desc">
              Posez une question en langage naturel. Le système vectorise la question,
              recherche les <strong>top-K chunks</strong> les plus proches par similarité cosinus,
              construit un prompt contextuel et l'envoie au LLM via <code>IChatService</code>.
              La réponse est ancrée dans vos documents, limitant les hallucinations hors contexte.
            </p>
            <button className="home-btn home-btn-secondary" onClick={() => onNavigate('chat')}>
              <span>💬</span> Ouvrir le chat
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
