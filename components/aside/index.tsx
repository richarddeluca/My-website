import { ArticlesSlice } from '../../slices/Articles'
import { styled } from '../../stitches.config'
import Image from 'next/image'
import { LatestArticle } from '../article'
const AsideContainer = styled('aside', {
  // border: '2px solid gold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: '7rem',
})

const AsideItems = styled('fieldset', {
  width: '100%',
  padding: '1.5rem',
  border: '2px solid $blogSpecial',
  borderRadius: '4px',
  legend: {
    fontSize: '1rem',
    textAlign: 'center',
    margin: '0 auto',
    padding: '0 .6rem',
    color: '$blogSpecial',
  },
  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '.9rem',
  },
})
const LtsArticles = styled('div', {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

interface AsideProps {
  articles: ArticlesSlice[]
}
export function Aside({ articles }: AsideProps) {
  const latestArticles = articles.slice(0, 3)
  return (
    <AsideContainer>
      {/* <SliceZone slices={aside.data.slices} components={components} /> */}
      <AsideItems>
        <legend>Sobre mim</legend>
        <Image width={160} height={160} src="/tree.jpeg" alt="autor" />
        <h3>DEV BLOG</h3>
        <p>
          Sou Richard, desenvolvedor web que mora no DF. Além da programação me
          interesso por UX design e psicologia. Meu objetivo é criar soluções
          que ajudem de verdade as pessoas.
        </p>
        <span>read more</span>
      </AsideItems>
      <AsideItems>
        <legend>Posts recentes</legend>
        <LtsArticles>
          {latestArticles.map((article) => {
            return <LatestArticle key={article.id} article={article} />
          })}
        </LtsArticles>
      </AsideItems>
    </AsideContainer>
  )
}
