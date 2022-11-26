import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { styled } from '../../stitches.config'

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */

const TextContainer = styled('section', {
  backgroundColor: '$backSecondary',
  padding: '1rem',
})
const Text = ({ slice }) => (
  <TextContainer>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </TextContainer>
)

export default Text
