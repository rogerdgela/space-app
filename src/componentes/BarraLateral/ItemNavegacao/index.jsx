import styled from "styled-components";

const ItemListaEstilizado = styled.li`

`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return (
        <ItemListaEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Teste" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao;