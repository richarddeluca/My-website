import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { styled } from '../../stitches.config'

/**
 * @typedef {import("@prismicio/client").Content.QuoteSlice} QuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuoteSlice>} QuoteProps
 * @param { QuoteProps }
 */

const QuoteContainer = styled('section', {
  '.title': {
    fontSize: '$3xl',
    textAlign: 'center',
  },

  '.person': {
    fontSize: 'xl',
    textAlign: 'center',
  },
})

const Quote = ({ slice }) => (
  <QuoteContainer>
    <span className="title">
      {slice.primary.quote ? (
        <PrismicRichText field={slice.primary.quote} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.person && (
      <span className="person">
        <PrismicRichText field={slice.primary.person} />
      </span>
    )}
  </QuoteContainer>
)

export default Quote
