import { useEffect, useState } from "react";

export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:4000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    };
    buscarUsuario();
  }, [usuarios]);

  const deletar = async(id) => {
    try {
      await fetch(`http://localhost:4000/usuarios`, {
        method: 'DELETE'
      });
    } catch {
      alert("Erro ao deletar!");
    }
  };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => deletar(usuario.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
