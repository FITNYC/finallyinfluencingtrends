const basePath = process.env.NODE_ENV === "production" ? "/finallyinfluencingtrends" : "";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${basePath}/HomeBackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <header className="hero shell">
        <nav className="topbar">
          <div className="brand-mark">
            <img
              src={`${basePath}/logo.png`}
              alt="Finally Influencing Trends logo"
              width="56"
              height="56"
            />
            <span>Finally Influencing Trends</span>
          </div>

          <a className="ghost-link" href="#contact">
            Let&apos;s talk
          </a>
        </nav>

        <section className="hero-grid">
          <div>
            <p className="eyebrow">Finally Influencing Trends</p>

            <h1>Influence the culture. Define what&apos;s next.</h1>

            <p className="lead">
              Finally Influencing Trends is a bold creative brand built to make a statement.
              This site is designed to be clean, striking, and easy for you to update in
              Visual Studio Code.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#about">
                Learn more
              </a>
              <a className="button secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="feature-label">Creative Brand</p>
              <h2>Finally Influencing Trends</h2>
              <p>
                Built for a modern visual identity with your own logo, custom background,
                and strong brand presence.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className="section shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>A brand built to stand out</h2>
          <p className="section-copy">
            Use this space to introduce your brand, your mission, and the type of influence
            you want to create. You can later swap this text with your real message, story,
            services, or campaign direction.
          </p>
        </div>
      </section>

      <section className="section shell" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to connect?</h2>
            <p>
              Replace this with your email, booking link, Instagram, TikTok, or any platform
              where people should reach you.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button primary" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <a className="button secondary" href="https://github.com/FITNYC/finallyinfluencingtrends">
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}