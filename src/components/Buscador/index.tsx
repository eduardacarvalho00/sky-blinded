import { Container }from "./styles";
import { CgSearch } from "react-icons/cg"



export default function Buscador(){
    return(
        <Container>
            <input
            type="text"
            placeholder="Procure sua cidade" 
            />
            <CgSearch
            size={20}
            color="#20dbd8"
            />
        </Container>
    )
}