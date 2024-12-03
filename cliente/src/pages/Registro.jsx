import { useState } from "react";

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation('');

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
        navigation('/');
      }
      
    } catch (error) {
      alert("Ocorreu um erro ao registrar");
    }
  };

  return (
    <main>
      <form onSubmit={registrar}>
        <input type="text" 
               value={nome} 
               onChange={(event) => setNome(event.target.value)} 
               placeholder="Nome" />
        <input type="email" 
               value={email} 
               onChange={(event) => setEmail(event.target.value)} 
               placeholder="Email" />
        <button type="submit">SALVAR</button>
      </form>
    </main>
  );
}
