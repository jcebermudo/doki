import { FormEvent, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import tauriLogo from "./assets/tauri.svg";
import tsLogo from "./assets/typescript.svg";

function App() {
  const [name, setName] = useState("");
  const [greetMsg, setGreetMsg] = useState("");

  async function greet(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    const message = await invoke<string>("greet", { name });
    setGreetMsg(message);
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src={tauriLogo} className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://www.typescriptlang.org/docs" target="_blank">
          <img src={tsLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
      </div>
      <p>Click on the Tauri logo to learn more about the frameworksss</p>

      <form className="row" onSubmit={greet}>
        <input
          id="greet-input"
          placeholder="Enter a name..."
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
