import Item from "./Item/item.jsx"
import ativosMock from "../data/ativosMock"

function ListaAtivos() {
    return (
        <div>
            <ul>
                {ativosMock.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        nome={item.nome}
                        status={item.status}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ListaAtivos