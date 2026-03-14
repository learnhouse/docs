import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const SITE_URL = 'https://docs.learnhouse.app'

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const path = params.mdxPath ? `/${params.mdxPath.join('/')}` : ''
  return {
    ...metadata,
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const { default: MDXContent, toc, metadata } = await importPage(params.mdxPath)
  const path = params.mdxPath ? `/${params.mdxPath.join('/')}` : ''

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title || 'LearnHouse Docs',
    url: `${SITE_URL}${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'LearnHouse',
      url: 'https://learnhouse.app',
    },
    isPartOf: {
      '@type': 'WebSite',
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    </>
  )
}
