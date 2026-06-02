type Tab = 'home' | 'chat' | 'config';

interface Props {
  onNavigate: (tab: Tab) => void;
}

export function HomePage({ onNavigate }: Props) {
  return (
    <div className="home-layout">
      <div className="home-content">

        <div className="home-intro">
          <div className="home-badge">Projet vitrine RAG</div>
          <h1 className="home-title">EID RAG Chat</h1>
          <p className="home-desc">
            Bonjour, je suis <span className="home-highlight">Jonathan Ehrhard</span>, développeur Full-Stack C# / React avec 6 ans d'expérience.
            J'ai conçu cette application de bout en bout pour l'entretien technique EID — elle démontre ma maîtrise du pattern{' '}
            <span className="home-highlight">Retrieval-Augmented Generation</span> :
            chunking token-aware, vectorisation via Mistral Embed, stockage et recherche kNN dans Elasticsearch,
            puis génération de réponse contextuelle par un LLM (Mistral ou Claude Opus).
            L'ensemble est déployé sur un VPS Ionos sous Docker avec reverse proxy Caddy et TLS automatique,
            le frontend est publié sur GitHub Pages via CI/CD GitHub Actions.
          </p>

          <div className="home-stack">
            <div className="stack-item"><span className="stack-icon">⚛️</span><span>React 19 + Vite 8</span></div>
            <div className="stack-item"><span className="stack-icon">⚙️</span><span>.NET 8 RAG API</span></div>
            <div className="stack-item"><span className="stack-icon">🖥️</span><span>VPS Ionos · Docker · Caddy TLS</span></div>
            <div className="stack-item"><span className="stack-icon">🗄️</span><span>Elasticsearch 9 · kNN</span></div>
            <div className="stack-item"><span className="stack-icon">🟣</span><span>Claude Opus (chat)</span></div>
            <div className="stack-item"><span className="stack-icon">🟠</span><span>Mistral Embed + Chat</span></div>
            <div className="stack-item"><span className="stack-icon">🏗️</span><span>Pattern Strategy + Factory</span></div>
            <div className="stack-item"><span className="stack-icon">🔍</span><span>Similarité cosinus · Chunking · Tokenisation</span></div>
          </div>
        </div>

        <div className="home-sections home-sections--compact">
          <div className="home-section">
            <div className="home-section-header">
              <span className="home-section-icon">⚙️</span>
              <div>
                <div className="home-section-title">Configurer la base de connaissances</div>
                <div className="home-section-sub">À faire avant de chatter</div>
              </div>
            </div>
            <p className="home-section-desc">
              Collez un document texte. L'API le découpe en <strong>chunks token-aware</strong>,
              vectorise via <code>IEmbeddingService</code> (Mistral Embed) et stocke dans Elasticsearch.
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
              Posez une question en langage naturel. Le système récupère les <strong>top-K chunks</strong> par similarité cosinus
              et génère une réponse ancrée dans vos documents via <code>IChatService</code>.
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
