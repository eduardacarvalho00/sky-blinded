import { Container, Form } from "./styles";

interface Props {
  cityName: string;
  onChangeInput: (text: string) => void;
  buscar: () => Promise<void>
}

export default function Buscador(props: Props) {
  const { cityName, onChangeInput, buscar } = props
  return (
    <Container>
      <Form
        action=""
      // onSubmit={() => buscar()}
      >
        <input
          name="search"
          type="text"
          placeholder="Procure sua cidade"
          value={cityName}
          onChange={event => onChangeInput(event.target.value)}
        />
        <input
          name="Buscar"
          // type="submit"
          type="button"
          value="Buscar"
          onClick={() => buscar()}
        />
      </Form>
    </Container>
  )
}