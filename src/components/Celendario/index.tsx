import { Content, Section } from './styles';
import { RiSunCloudyFill, RiSunFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Calendario() {
    const [date, setDate] = useState('');

    useEffect(() => {
        api
            .get("/date")
            .then((response) => setDate(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    return (
        <>
            <Content>
                <h1>11/05/2022</h1>
                <p>qua</p>
                <RiSunCloudyFill
                    size={35} />
                <p>descrição</p>

                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>

            <Content>
                <h1>12/05/2022</h1>
                <p>qui</p>
                <RiSunCloudyFill
                    size={35} />
                <p>descrição</p>
                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>

            <Content>
                <h1>13/05/2022</h1>
                <p>qui</p>
                <RiSunCloudyFill
                    size={35} />
                <p>descrição</p>
                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>

            <Content>
                <h1>14/05/2022</h1>
                <p>qui</p>
                <RiSunCloudyFill
                    size={35} />
                <p>descrição</p>
                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>

            <Content>
                <h1>15/05/2022</h1>
                <p>qui</p>
                <RiSunCloudyFill
                    size={35} />
                <p>descrição</p>
                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>
        </>
    )
}