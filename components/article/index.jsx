import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'
import { dateFormatter, dateDistanceToNow } from '../../utils/dateFormatter'
import {
  ArticleStyle,
  CardImageContainer,
  TextContainer,
  Title,
  Date,
  Paragraph,
  LtsArticle,
} from './styles'

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === 'image')

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image
  }
}

const getExcerpt = (slices, qtdWords) => {
  const text = slices
    .filter((slice) => slice.slice_type === 'text')
    .map((slice) => prismicH.asText(slice.primary.description))
    .join(' ')

  const excerpt = text.substring(0, qtdWords)

  if (text.length > qtdWords) {
    return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
  } else {
    return excerpt
  }
}

export default function Article({ article, qtdWords = 72 }) {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices)
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date,
  )
  const excerpt = getExcerpt(article.data.slices, qtdWords)

  return (
    <ArticleStyle>
      <PrismicLink document={article} tabIndex="-1">
        <CardImageContainer>
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              alt={featuredImage.alt}
              width={512}
            />
          )}
        </CardImageContainer>
      </PrismicLink>
      <TextContainer>
        <Title>
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Title>
        <Date>{dateFormatter.format(date)}</Date>
        {excerpt && <Paragraph>{excerpt}</Paragraph>}
      </TextContainer>
    </ArticleStyle>
  )
}

export function LatestArticle({ article }) {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices)
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date,
  )

  return (
    <LtsArticle>
      <PrismicLink document={article} tabIndex="-1">
        {prismicH.isFilled.image(featuredImage) && (
          <PrismicNextImage
            as={PrismicNextImage}
            field={featuredImage}
            width={256}
            alt={featuredImage.alt}
          />
        )}
      </PrismicLink>
      <Title>
        <PrismicText field={article.data.title} />
      </Title>
      <Date>{dateDistanceToNow(date)}</Date>
    </LtsArticle>
  )
}
