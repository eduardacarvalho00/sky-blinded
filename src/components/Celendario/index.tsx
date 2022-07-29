import { List, Content, Section, Container } from './styles';

export interface ForecastItem {
    date: string;
    weekday: string;
    condition: string;
    description: string;
    min: number;
    max: number;
}

interface Props {
    resultado: ForecastItem[]
}

export default function Calendario(props: Props) {
    const { resultado } = props

    return (
        <Container>
            <List>
                {resultado.map((forecast, index) => (
                    <Content key={index}>
                        <h1>{forecast.date}</h1>
                        <p>{forecast.weekday}.</p>

                        <p>{forecast.description}</p>

                        <Section>
                            <p>Min {forecast.min}ºC</p>
                            <p>Máx {forecast.max}ºC</p>
                        </Section>
                    </Content>
                ))}
            </List>
        </Container>
    )
}