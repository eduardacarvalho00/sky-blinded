import { useState } from 'react';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Calendario, { ForecastItem } from './components/Celendario';
import api from './services/api';
import Footer from './components/Footer';
import { Container } from './styles';



export default function App() {
  const [cityName, setCityName] = useState('');
  const [resultado, setResultado] = useState<ForecastItem[]>([]);

  const onChangeInput = (text: string) => {
    setCityName(text)
  }

  const buscar = async () => {
    const response = await api.get("", { params: { city_name: cityName } })
    console.log({ resultado: response.data });
    setResultado(response.data.results.forecast.slice(0, 5));
  }

  return (
    <Container>
      <Header />
      <Buscador
        cityName={cityName}
        onChangeInput={onChangeInput} buscar={buscar} />
      <Calendario resultado={resultado} />
      <Footer />
    </Container>
  )
}