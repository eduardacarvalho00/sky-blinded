import { Container } from './styles';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <Container className='foot'>
      <div>
        <q>Aprender a programar aumenta a mente, ajuda a pensar melhor.
          <br /> Bill Gates - Fundador da Microsoft
        </q>
      </div>
      <div>
        <a href="https://instagram.com/_eduarda.cr?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram size={20} color='white' /></a>
        <a href="https://www.linkedin.com/in/eduardacarvalho9833/" target="_blank"><BsLinkedin size={20} color='white' /></a>
        <a href="https://github.com/eduardacarvalho00" target="_blank"><BsGithub size={20} color='white' /></a>
        <a href="mailto:eduardacarvalho9833@gmail.com" target="_blank"><AiOutlineMail size={20} color="white" /></a>
      </div>
    </Container>
  )
}