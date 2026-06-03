export function DemoTab() {
  return (
    <div className="cv-layout">
      <div className="cv-header" style={{ flexDirection: 'column', gap: '0.25rem' }}>
        <h1 className="cv-name">Explications & Démo</h1>
        <div className="cv-title">Présentation du POC RAG AskJo</div>
      </div>

      <div className="demo-card" style={{ maxWidth: '900px' }}>
        <div className="demo-card-title">🎬 Démo du RAG POC</div>
        <div className="demo-card-sub">Présentation fonctionnelle et technique — pipeline RAG, patterns, infra, démonstration</div>
        <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary, #6b7280)', fontSize: '0.9rem', lineHeight: '1.6' }}>
          Cette vidéo présente le fonctionnement de l'application AskJo et les choix techniques qui la composent : architecture RAG, traitement des documents, orchestration des appels LLM et interface utilisateur.
        </p>
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/aMcKI1YaE9w"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          style={{ borderRadius: '6px', border: 'none', marginTop: '0.75rem' }}
        />
      </div>
    </div>
  );
}
