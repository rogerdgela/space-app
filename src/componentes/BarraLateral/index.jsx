import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao"

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
                    <ItemNavegacao 
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistos
                    </ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidos
                    </ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novos
                    </ItemNavegacao>

                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>            
                </ListaEstilizado>
            </nav>
        </aside>
    )
}

export default BarraLateral;