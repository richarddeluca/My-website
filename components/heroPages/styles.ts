import { styled } from '../../stitches.config'

export const HeroContainer = styled('section', {
  width: '100%',
  height: '100vh',

  backgroundColor: '$backPrimary',
})

export const HeroContent = styled('div', {
  width: '100%',
  maxWidth: '$maxWidth',
  display: 'grid',
  gridTemplateRows: '1fr 4rem 2rem',
  alignItems: 'stretch',
  justifyItems: 'center',
  height: '100%',
  marginTop: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const NavHero = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  button: {
    height: '1.5rem',
    lineHeight: 1,

    borderRadius: '12px',
    border: '1px solid $backSecondary',
    textTransform: 'uppercase',
    padding: '.25rem 1.5rem .15rem 1.5rem',
    listStyle: 'none',
    fontSize: '$p',
    background: 'transparent',
    cursor: 'pointer',
    '&[data-state="unchecked"]:hover': {
      opacity: '.8',
    },
    '&[data-state="checked"]': {
      borderColor: '$backTertiary',
      color: '$frontTertiary',
      cursor: 'default',
    },
  },

  '.home': {
    borderRadius: '16px',
    padding: '.25rem .5rem',
  },
})
