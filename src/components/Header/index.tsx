import { BsFillCloudSunFill } from 'react-icons/bs';
import { Container, Content } from './styles';


export default function Header() {
    return (
        <Container>
            <Content>
                < BsFillCloudSunFill size={40} color='white' />
                <h1>Qual a previsão de tempo na sua cidade?</h1>
            </Content>
        </Container>
    )
}