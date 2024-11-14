import styled from "styled-components";

const ListaEstilizado = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizado>
                    <li><a href="">Início</a></li>
                </ListaEstilizado>

                <ListaEstilizado>
                    <li><a href="">Mais vistas</a></li>
                </ListaEstilizado>

                <ListaEstilizado>
                    <li><a href="">Mais curtidas</a></li>
                </ListaEstilizado>

                <ListaEstilizado>
                    <li><a href="">Novas</a></li>
                </ListaEstilizado>

                <ListaEstilizado>
                    <li><a href="">Surpreenda-me</a></li>
                </ListaEstilizado>
            </nav>
        </aside>
    )
}

export default BarraLateral;