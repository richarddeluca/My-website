import { styled } from '../../stitches.config'

export const ArticleStyle = styled('li', {
  borderBottom: '1px solid $blogSpecial',
  width: '20rem',
  height: '16.5rem',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  gap: '.5rem',
  overflow: 'hidden',

  a: {
    height: '100%',
    display: 'block',
  },
})

export const CardImageContainer = styled('div', {
  overflow: 'hidden',
  width: '100%',
  height: '9rem',
  borderRadius: '3px',

  '>img': {
    display: 'block',
    width: '100%',
    height: '100%',
    // aspectRatio: '9/16',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

export const TextContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto auto auto',
  // textAlign: 'justify',
})

export const Title = styled('div', {
  fontSize: '1.2rem',
})
export const Date = styled('time', {
  fontSize: '.9rem',
  marginBottom: '1rem',
})
export const Paragraph = styled('div', {
  fontSize: '1rem',
  color: '$frontSecondary',
})

export const LtsArticle = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  img: {
    width: '125px',
    height: '100px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  h4: {
    fontSize: '.9rem',
  },
  time: {
    fontSize: '.8rem',
  },
})
