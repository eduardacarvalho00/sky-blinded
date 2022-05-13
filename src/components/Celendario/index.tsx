import { Content, Section } from './styles';
import { RiSunCloudyFill, RiSunFill } from 'react-icons/ri';
import { ReactNode } from 'react';

interface RepositoryCalendario{
    repository: {
        city_name: string;
        date: string;
        weekday: string;
        max: ReactNode;
        min: ReactNode;
        description: string;
        condition:string;
    }
}

export default function Calendario(props:  RepositoryCalendario ){
    return(
        <>
            <Content>
                <h1>{props.repository.date}</h1>
                <p>{props.repository.weekday}</p>
                <RiSunCloudyFill
                size={35}/>
                <p>{props.repository.description}</p>
                
                <Section>
                    <p>{props.repository.min}</p>
                    <p>{props.repository.max}</p>
                </Section>
            </Content>

            <Content>
                <h1>12/05/2022</h1>
                <p>qui</p>
                <RiSunCloudyFill
                size={35}/>
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
                size={35}/>
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
                size={35}/>
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
                size={35}/>
                <p>descrição</p>
                <Section>
                    <p>Min: 18°C</p>
                    <p>Máx: 23°C</p>
                </Section>
            </Content>
        </>
    )
}