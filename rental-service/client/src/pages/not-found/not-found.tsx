import { Logo } from "../../components/logo/logo";
function NotFoundPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/">Return to Home</a>
        </div>
      </main>
    </div>
  );
}

export { NotFoundPage };
