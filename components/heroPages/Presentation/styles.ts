import { styled } from '../../../stitches.config'

export const PresentationStyle = styled('article', {
  display: 'grid',
  gridTemplateRows: '60% 40%',
  alignItems: 'center',
  justifyItems: 'center',
  img: {
    alignSelf: 'flex-end',
    borderRadius: '50%',
  },
  textTransform: 'uppercase',
  h1: {
    margin: '1rem auto 0.2rem auto',
    fontSize: '2.8rem',
    // fontWeight: '700',
    letterSpacing: '.3rem',
    textAlign: 'center',
  },

  h2: {
    textAlign: 'center',
    color: '$frontSecondary',
    fontSize: '1.3rem',
    // fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '.2rem',
  },
  h3: {
    textAlign: 'center',
    color: '$frontSecondary',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    fontSize: '1.1rem',
    opacity: 0.5,
  },
})
