import Head from 'next/head'
import Article from '../../components/article'
import { createClient } from '../../prismicio'

export default function Blog({
  articles,
  // navigation, settings
}) {
  return (
    <>
      <Head>
        <title>
          {/* {prismicH.asText(settings.data.name)} */}
          title
        </title>
      </Head>
      <div>
        <ul>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const articles = await client.getAllByType('article', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
  // const navigation = await client.getSingle('navigation')
  // const settings = await client.getSingle('settings')

  return {
    props: {
      articles,
      // navigation,
      // settings,
    },
  }
}
