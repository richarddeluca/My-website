import { AboutContainer } from './styles'
import Image from 'next/image'

export function About() {
  return (
    <AboutContainer>
      <div className="content">
        <Image src="/tree2.jpeg" width={512} height={512} alt="grande árvore" />

        <div className="text">
          <h1>Olá</h1>
          <p>
            Sou Richard, desenvolvedor web que mora no DF. Além da programação
            me interesso por UX design e psicologia. Meu objetivo é criar
            soluções que ajudem de verdade as pessoas.
          </p>
        </div>
      </div>
    </AboutContainer>
  )
}
