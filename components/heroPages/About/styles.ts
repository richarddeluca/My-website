import { styled } from '../../../stitches.config'

export const AboutContainer = styled('article', {
  display: 'grid',
  alignItems: 'center',
  '.content': {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    maxWidth: '1000px',
  },
  img: {
    padding: '3rem',
    width: '24rem',
    height: '24rem',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  '.text': {
    alignSelf: 'center',
  },
  h1: {
    color: '$blogSpecial',
    fontSize: '2rem',
    marginBottom: '1rem',
    textTransform: 'capitalize',
  },
  p: {
    fontSize: '1.6rem',
  },
})
