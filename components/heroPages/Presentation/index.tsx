import Image from 'next/image'
import { PresentationStyle } from './styles'

export default function Presentation() {
  return (
    <PresentationStyle>
      <Image
        src={'/profile.jpeg'}
        width={120}
        height={120}
        alt={'foto de perfil'}
      />
      <div className="text">
        <h2>Desenvolvedor de software</h2>
        <h1>Richard Deluca</h1>
        <h3>
          especializado em <span>front-end web</span>
        </h3>
      </div>
    </PresentationStyle>
  )
}
