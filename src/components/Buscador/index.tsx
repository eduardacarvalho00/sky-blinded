import { Container }from "./styles";
import { CgSearch } from "react-icons/cg"
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Buscador(){

    const [busca, setBusca] = useState();

    useEffect(() => {
      api
        .get("/city_name=Campinas,SP")
        .then((response) => setBusca(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

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