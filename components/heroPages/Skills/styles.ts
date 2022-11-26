import { styled } from '../../../stitches.config'

export const SkillsStyle = styled('article', {
  display: 'grid',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  '.content': {
    display: 'grid',
    gridTemplateColumns: '6fr 5fr',
    gap: '2vw',
    alignItems: 'center',

    '.skillsPoints': {
      background: '$backSecondary',
      borderRadius: '12px',
      height: 'fit-content',
      padding: '2rem',
    },

    '.skillsCardsBoard': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '.8rem',
      height: '65vh',
      justifyItems: 'center',
      // background: 'black',
      borderRadius: '8px',
      boxShadow: 'inset 0px 0px 50px 10px $backSecondary',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: '1px',
      },
      '&::-webkit-scrollbar-track': {
        background: '$backSecondary',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'black',
        borderRadius: 0,
      },
    },
  },
})

export const SkillLine = styled('div', {
  width: '100%',
  h4: {
    color: '$frontSecondary',
  },
})

export const Line = styled('div', {
  width: '100%',
  display: 'flex',
  // justifyContent: '',
  gap: '.2rem',
})

export const SkillDot = styled('div', {
  height: '.5rem',
  flexGrow: '1',
  flexBasis: '30px',
  backgroundColor: '$backTertiary',
  minWidth: '10px',
  variants: {
    know: {
      true: {
        backgroundColor: '$backSpecial',
      },
    },
  },
  gap: '.2rem',
  '&:hover': {
    opacity: '0.8',
  },
})

export const sizes = {
  ha: '7rem',
  tim: '8rem',
  bum: '3rem',
  color: '#61dafb',
}

export const SkillBox = styled('div', {
  height: `calc(${sizes.tim} + ${sizes.bum})`,
  position: 'relative',
  p: {
    fontSize: '1rem',
  },
  zIndex: '1',

  '&:hover': {
    '.card': {
      marginTop: '0',
      svg: {
        filter: 'brightness(1)',
      },
    },
    '.light': {
      filter: 'blur(9px)',
      width: `calc(${sizes.ha} * 0.5)`,
      boxShadow: `0 -1rem 2.6rem ${sizes.color}`,
    },
  },

  '&:nth-child(3n+2)': {
    marginTop: '1.5rem',
  },
})

export const Card = styled('div', {
  marginTop: sizes.bum,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.6rem',
  background: '$backSecondary',
  borderRadius: '12px',
  width: sizes.ha,
  height: sizes.tim,
  transition: '.6s cubic-bezier(.16,1.05,.83,.97)',

  svg: {
    filter: 'brightness(.4)',
  },
})

// export const Lamp = styled('div', {
//   width: '1rem',
//   height: '.3rem',
//   backgroundColor: sizes.color,
//   boxShadow: `0 1rem 60px 1rem ${sizes.color}`,
// })

export const Light = styled('div', {
  position: 'absolute',
  bottom: '0.4rem',
  left: '0',
  right: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: '-1',
  // margin: '0.5rem auto',
  width: `calc(${sizes.ha}* 0.85)`,
  height: '.6rem',
  filter: 'blur(5px)',
  transition: '.3s ease',

  backgroundColor: sizes.color,
  boxShadow: `0 0 4px -4px ${sizes.color}`,
})
