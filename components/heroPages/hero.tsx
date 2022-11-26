import { HeroContainer, HeroContent, NavHero } from './styles'
import { About } from './About'
import Presentation from './Presentation'
import { Skills } from './Skills'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { IoHome } from 'react-icons/io5'
import { useState } from 'react'

function iterationOnHeros(hero: string) {
  switch (hero) {
    case 'skills':
      return <Skills />
    case 'about':
      return <About />
    default:
      return <Presentation />
  }
}

export default function Hero() {
  const [hero, setHero] = useState('home')
  return (
    <>
      <HeroContainer>
        <HeroContent>
          {iterationOnHeros(hero)}
          <NavHero
            as={RadioGroup.Root}
            defaultValue="home"
            onValueChange={(value) => setHero(value)}
          >
            <RadioGroup.Item value="skills">habilidades</RadioGroup.Item>
            {/* <RadioGroup.Item value="works">works</RadioGroup.Item> */}
            <RadioGroup.Item value="about">sobre mim</RadioGroup.Item>
            <RadioGroup.Item value="home" className="home">
              <IoHome />
            </RadioGroup.Item>
          </NavHero>
          {/* <div>
            <button>blog abaixo</button>
          </div>{' '} */}
        </HeroContent>
      </HeroContainer>
    </>
  )
}
