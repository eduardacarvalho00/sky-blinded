import { BsFillCloudSunFill } from 'react-icons/bs';
import { Container, Content } from './styles';
import background from "../../assets/header.jpg";

export default function Header(){
    return(
        <Container>
            <Content>
                < BsFillCloudSunFill  size={40}/>
                <h1>Qual a previsão de tempo na sua cidade?</h1>
            </Content>
        </Container>
    )
}