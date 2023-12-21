import "./index.css";

export function Navbar() {
  return (
    <div className="navbar-container">
      <img src="/assets/logo.jpg" alt="logo" className="logo" />
      <div className="navbar-title">
        <h1>Lyve</h1>
        <h1 className="title-bold">Script</h1>
      </div>
    </div>
  );
}
