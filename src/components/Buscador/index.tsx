import { Container }from "./styles";
import { CgSearch } from "react-icons/cg"
import api from "../../services/api";
import { useEffect, useState } from "react";

interface Props{
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({busca, setBusca}:Props){
    useEffect(() => {
      api
        .get("/city_name")
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
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            
            />
            <CgSearch
            size={20}
            color="#20dbd8"
            />         
        </Container>
    )
}