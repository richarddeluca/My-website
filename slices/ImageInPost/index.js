import React from 'react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
/**
 * @typedef {import("@prismicio/client").Content.ImageInTextSlice} ImageInTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageInTextSlice>} ImageInTextProps
 * @param { ImageInTextProps }
 */
const ImageInText = ({ slice }) => (
  <section>
    <PrismicNextImage
      field={slice.primary.image}
      width={800}
      alt={slice.primary.image.alt}
    />
    {slice.primary.description && (
      <PrismicRichText field={slice.primary.description} />
    )}
  </section>
)

export default ImageInText
