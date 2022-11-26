import { ArticlesSlice } from '../../slices/Articles'
import { styled } from '../../stitches.config'
import Article from '../article'
import { Aside } from '../aside'

const BlogContainer = styled('section', {
  margin: '0 auto',
  // paddingTop: '2rem',
  paddingBottom: '2rem',
})

const Hero = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  borderTop: '1px dashed $backTertiary',
  width: '100%',
  height: '11rem',

  h2: {
    color: '$frontPrimary',
    fontSize: '3rem',
  },
})

const BlogDiv = styled('div', {
  maxWidth: '$maxWidth',

  margin: '0 auto',
  h2: {
    marginBottom: '5rem',
    textTransform: 'capitalize',
  },
})

const BlogShowcase = styled('section', {
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

interface BlogProps {
  articles: ArticlesSlice[]
}

export default function Blog({ articles }: BlogProps) {
  return (
    <BlogContainer>
      <Hero>
        <h2>Dev blog</h2>
      </Hero>
      {/* <CategoriesContainer>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </CategoriesContainer> */}
      <BlogDiv>
        <h2>Leia se quiser</h2>
        <BlogShowcase>
          <div>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
          <Aside articles={articles} />
        </BlogShowcase>
      </BlogDiv>
    </BlogContainer>
  )
}
