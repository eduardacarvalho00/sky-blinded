import { RiSunCloudyFill, RiSunFill } from 'react-icons/ri';
import {BsCloudRainHeavyFill, BsCloudLightningRainFill, BsFillCloudsFill} from 'react-icons/bs';
import { Container, Content } from "./styles";

export default function Tabela(){
    return(
        <Container>
            <Content>
                <thead>
                    <tr>
                        <td>10/05</td>
                        <td>11/05</td>
                        <td>12/05</td>
                        <td>13/05</td>
                        <td>14/05</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><RiSunCloudyFill size={40}/></td>
                        <td><RiSunFill/></td>
                        <td><BsCloudRainHeavyFill/></td>
                        <td><BsCloudLightningRainFill/></td>
                        <td><BsFillCloudsFill/></td>
                    </tr>
                    <tr>
                        <td>17°-19°C</td>
                        <td>22°-25°C</td>
                        <td>19°-20°C</td>
                        <td>14°-16°C</td>
                        <td>18°-20°C</td>
                    </tr>
                </tbody>
            </Content>
        </Container>
    )
}