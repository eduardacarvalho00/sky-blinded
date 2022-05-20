import { useState } from 'react';
import { Container, Form } from "./styles";
import { CgSearch } from "react-icons/cg"
import api from '../../services/api';

export default function Buscador() {
  const [cityName, setCityName] = useState('');
  const [resultado, setResultado] = useState();

  const buscar = async () => {
    console.log("chegou")
    const response = await api.get("", { params: { city_name: cityName } })
    console.log("chegou2")
    setResultado(response.data);
  }

  /*useEffect(() => {
    api
      .get("/city_name")
      .then((response) => setCityName(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);*/
  console.log({ resultado });
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
        <button
          name="Buscar"
          type="submit"
          value="Buscar"
          onClick={() => buscar()}
        />
      </Form>
    </Container>
  )
}
