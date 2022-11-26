import { FaHeart } from 'react-icons/fa'
import { styled } from '../../stitches.config'

const FooterContainer = styled('footer', {
  width: '100%',
  backgroundColor: '$backSecondary',
})

const FooterContent = styled('div', {
  // display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',
  // justifyContent: 'space-between',
  alignItems: 'center',
  justifyItems: 'center',
  maxWidth: '1200px',
  // height: '10rem',
  margin: '0 auto',
})

const FooterTitle = styled('h2', {
  textAlign: 'center',
  fontSize: '2.6rem',
  paddingTop: '4rem',
  paddingBottom: '3rem',
})

const Footnote = styled('footer', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  paddingBottom: '.4rem',
  color: '$frontSecondary',
  fontSize: '.8rem',
  alignItems: 'flex-end',

  '.madeBy': {
    gridArea: '1 / 2 / 2 / 3',
    justifySelf: 'center',
    textAlign: 'center',
  },
  '.inspired': {
    gridArea: '1 / 3 / 2 / 4',
    justifySelf: 'flex-end',

    a: {
      color: '#4968FF',
    },
  },
})

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Grato por me visitar</FooterTitle>
        <Footnote>
          <div>Site em construção</div>
          <div className="madeBy">
            <FaHeart />
            <div>Feito por mim, Richard</div>
          </div>
          <div className="inspired">
            Design inspirado
            <div>
              por{' '}
              <a href="https://www.behance.net/gallery/144306167/Web-Design-Software-Engineer-Portfolio">
                Miyya Garcia
              </a>{' '}
              e{' '}
            </div>
            <a href="https://www.behance.net/gallery/148584867/Food-Blog-Website">
              Khrystyna Ruzhytska
            </a>
          </div>
        </Footnote>
      </FooterContent>
    </FooterContainer>
  )
}
