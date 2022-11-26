import Layout from '../components/layout'
import Hero from '../components/heroPages/hero'
import { GetStaticProps } from 'next'
import { createClient } from '../prismicio'

import Head from 'next/head'
import Blog from '../components/blog'

import { ArticlesSlice } from '../slices/Articles'

export default function Home({ articles }: ArticlesSlice) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {/* {prismicH.asText(settings.data.name)} */}
            Dev Blog | Richard
          </title>
        </Head>
        <Hero />
        <Blog articles={articles} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const articles = await client.getAllByType('article', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
  // const navigation = await client.getSingle('navigation')
  // const settings = await client.getSingle('settings')
  // const aside = await client.getSingle('aside')

  // async function fetchUser() {
  //   const response = await api.get("users/richarddeluca")
  //   const { name, followers, login, html_url, avatar_url, bio } = response.data
  //   const userData = {
  //     name,
  //     followers,
  //     username: login,
  //     url: html_url,
  //     imgUrl: avatar_url,
  //     bio,
  //   }
  //   setUser(userData)
  // }

  return {
    props: {
      articles,
      // navigation,
      // settings,
      // aside,
    },
  }
}
