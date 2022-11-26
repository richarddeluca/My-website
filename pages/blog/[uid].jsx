import Head from 'next/head'
import { PrismicLink, PrismicText, SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

import { dateFormatter } from '../../utils/dateFormatter'
import { styled } from '../../stitches.config'

import { Aside } from '../../components/aside'

const Blog = styled('section', {
  maxWidth: '$maxWidth',
  margin: '0 auto',
})

const ContentSection = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 17.5rem',
  alignItems: 'start',
  '>div': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '6rem 2rem',
    flexWrap: 'wrap',
  },
})

const ArticleContainer = styled('article', {
  maxWidth: '$maxWidth',
  margin: '0 auto',

  h1: {
    fontSize: '2.4rem',
  },
})

export default function Article({
  article,
  latestArticles,
  // navigation,
  // settings,
}) {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date,
  )

  return (
    <>
      <Head>
        <title>
          {prismicH.asText(article.data.title)} |{' '}
          {/* {prismicH.asText(settings.data.name)} */}
        </title>
      </Head>
      <Blog>
        <ContentSection>
          <ArticleContainer>
            <div>
              <PrismicLink
                href="/blog"
                className="font-semibold tracking-tight text-slate-400"
              >
                &larr; Back to articles
              </PrismicLink>
            </div>
            <div className="pb-0">
              <h1>
                <PrismicText field={article.data.title} />
              </h1>
              <p>{dateFormatter.format(date)}</p>
            </div>
            <SliceZone slices={article.data.slices} components={components} />
          </ArticleContainer>
          <Aside articles={latestArticles} />
        </ContentSection>
      </Blog>
    </>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const article = await client.getByUID('article', params.uid)
  const latestArticles = await client.getAllByType('article', {
    limit: 3,
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
  // const navigation = await client.getSingle('navigation')
  // const settings = await client.getSingle('settings')

  return {
    props: {
      article,
      latestArticles,
      // navigation,
      // settings,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const articles = await client.getAllByType('article')

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  }
}
