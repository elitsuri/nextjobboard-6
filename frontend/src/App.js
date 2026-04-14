import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>nextjobboard</h1>
        <p>NextJobBoard: Job board with SSR, full-text search, email alerts, and admin</p>
      </header>
      <main>
        <p>This project uses React for the frontend and connects to a backend API.</p>
      </main>
    </div>
  );
}
