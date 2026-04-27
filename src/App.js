import React, { useState } from "react";
import "./App.css";

function App() {
  // Estados para armazenar os valores dos inputs e a mensagem
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Função de validação exigida pelo enunciado
  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="login-screen">
      <h1>Login</h1>

      <div className="form-group">
        {/* Input de E-mail */}
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Input de Senha */}
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* Botão de Validação */}
        <button onClick={handleLogin}>Acessar</button>
      </div>

      {/* Label para exibir a mensagem de sucesso ou erro */}
      {mensagem && <label className="status-label">{mensagem}</label>}
    </div>
  );
}

export default App;