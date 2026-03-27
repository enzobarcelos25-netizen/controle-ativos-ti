function Item({ nome, status, id, remover, tipo, unidade}) {
        return (
            <li>
               <button onClick={() => remover(id)}>
                Remover
               </button>
                
                <div> Nome: {nome}</div>
               <div>Status: {status}</div>
                <div>Tipo: {tipo}</div>
               <div>Unidade: {unidade}</div> 
                <div>ID: {id}</div>
            </li>
        )
    }
    

    export default Item