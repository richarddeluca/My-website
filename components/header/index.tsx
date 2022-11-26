import { styled } from '../../stitches.config'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { ThemeButton } from '../themeButton'
const HeaderContainer = styled('header', {
  position: 'fixed',
  width: '100%',
})

const HeaderContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  height: '0rem',
  margin: '0 auto',

  // ul: {
  //   'li + li': {
  //     marginTop: '0.4rem'
  //   }
  // },

  '.cardBtn': {
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.4rem',
    padding: '.5rem',
    background: '$headerButtonsBg',
    backdropFilter: 'blur(7px)',
    border: '1px solid $backSecondary',
    color: '$headerButtonsFt',
    borderRadius: '6px',
    width: '2.4rem',
    height: '2.4rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: '.8',
    },
    '&:active': {
      filter: 'brightness(60%)',
    },
  },

  '.card': {},
})

const ContactBtns = styled('ul', {
  position: 'relative',
  width: '5.6rem',
  height: '3.2rem',
  a: {
    position: 'absolute',
    '&:nth-child(2)': {
      left: '1.8rem',
      transition: '.3s',
    },
  },
  '&:hover': {
    a: {
      position: 'absolute',
      '&:nth-child(2)': {
        left: '2.8rem',
      },
    },
  },
})

const OptionBtns = styled('ul', {
  position: 'relative',
  li: {
    position: 'absolute',
    '&:nth-child(1)': {
      right: 0,
    },
    '&:nth-child(2)': {
      right: '2.8rem',
    },
    '&:nth-child(3)': {
      right: '5.6rem',
    },
  },
})

export default function Navbar() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContactBtns>
          <a className="cardBtn" href="https://github.com/richarddeluca">
            {' '}
            <FaGithubAlt />{' '}
          </a>
          <a
            className="cardBtn"
            href="https://linkedin.com/in/richarddelucadev"
          >
            {' '}
            <FaLinkedinIn />{' '}
          </a>
        </ContactBtns>
        <OptionBtns>
          {/* <li className="cardBtn">
            <IoLanguage />
          </li> */}
          <ThemeButton className="cardBtn" />
        </OptionBtns>
      </HeaderContent>
    </HeaderContainer>
  )
}
