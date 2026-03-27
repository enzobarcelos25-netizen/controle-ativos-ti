  import { useState } from "react"



  function Formulario({ adicionarAtivo }) {

      const [form, setForm] = useState({
        nome: "",
        tipo: "",
        status: "",
        unidade: ""
      })

    return (
      <>
        Nome:
        <input
          name="nome"
          value={form.nome}
          onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            })
          }}
        />

        Tipo:
        <input
          name="tipo"
          value={form.tipo}
          onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            })
          }}
        />

        Status:
        <input
          name="status"
          value={form.status}
          onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            })
          }}
        />

        Unidade:
        <input
          name="unidade"
          value={form.unidade}
          onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            })
          }}
        />

        <button
          onClick={() => {
            console.log(form)
            adicionarAtivo(form)

            setForm({
              nome: "",
              tipo: "",
              status: "",
              unidade: ""
            })
          }}
        >
          Cadastrar
        </button>
      </>
    )
  }

  export default Formulario