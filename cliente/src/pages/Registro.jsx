import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);

  const navigation = useNavigation();

  const registrar = async (event) => {
    event.preventDefault();

    try {
      const resposta = await fetch("http://localhost:4000/usuarios", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
          email: email
        }),
      });

      if (resposta.ok) {
        navigation('/')
      }
      
    } catch {
      alert("Ocorreu um erro ao registrar");
    }
  };

  return (
    <main>
      <form onSubmit={registrar}>
        <div>
          <label htmlFor="nome">Nome:</label>
        <input type="text" 
               value={nome} 
               onChange={(event) => setNome(event.target.value)} 
               placeholder="Digite seu Nome" />
               </div>

        <div>
        <label htmlFor="email">E-mail:</label>      
        <input type="email" 
        id="email"
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        placeholder="Digite seu email" />
        </div>

        <button type="submit">SALVAR</button>
        
      </form>
    </main>
  );
}
