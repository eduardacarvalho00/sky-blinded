import { useEffect, useState } from 'react';
import { Container, Form } from "./styles";
import { CgSearch } from "react-icons/cg"
import api from '../../services/api';

export default function Buscador() {
  const [cityName, setCityName] = useState('')

  useEffect(() => {
    api
      .get("/city_name")
      .then((response) => setCityName(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Form action="">
        <input
          name="search"
          type="text"
          placeholder="Procure sua cidade"
          value={cityName}
          onChange={event => setCityName(event.target.value)}
        />
        <input
          name="Buscar"
          type="submit"
          value="Buscar"
        />
      </Form>
    </Container>
  )
}
