import { Container } from './styles';
import Calendario from './../Celendario';
import { ReactNode, useEffect, useState } from 'react';

interface RepositoryCaledario{
    city_name: string;
    date: string;
    weekday: string;
    max: ReactNode;
    min: ReactNode;
    description: string;
    condition:string;
}

export default function Tabela(){
    const [repositories, setRepositories] = useState<RepositoryCaledario[]>([]);
    useEffect(() => {
        fetch('/city_name,weekday,description,humidity,sunset,temp,forecast,max,min,date&key=3833c132')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    return(
        <Container>
            <div>
                {repositories.map(repository => {
                    return <Calendario key={repository.city_name} repository={repository}/>
                })} 
            </div>
            
        </Container>
    )
    
}