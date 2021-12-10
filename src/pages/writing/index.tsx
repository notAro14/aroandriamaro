import { FC, useState } from 'react';

import Head from 'next/head';
import Fuse from 'fuse.js';
import Link from 'next/link';

import { getAllArticles, Article } from '@/utils/mdx';

interface Props {
  articles: Article[];
}

const Writing: FC<Props> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [query, setQuery] = useState('');

  const fuse = new Fuse(articles, {
    minMatchCharLength: 2,
    keys: ['frontmatter.title', 'frontmatter.description'],
  });

  const handleChange = (value: string) => {
    setQuery(value);
    if (value === '') {
      setFilteredArticles(articles);
      return;
    }
    const fuseResult = fuse.search(value);
    setFilteredArticles(fuseResult.map(({ item }) => item));
  };

  return (
    <>
      <Head>
        <title>Aro Andriamaro | Writing</title>
      </Head>

      <label htmlFor='search-article'>Search for an article</label>
      <input
        id='search-article'
        name='search-article'
        value={query}
        onChange={({ target: { value } }) => handleChange(value)}
        placeholder='search an article'
      />

      <ul>
        {filteredArticles.map((article) => {
          return (
            <li key={article.slug}>
              <Link href={`/writing/${article.slug}`}>
                {article.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true });
  return { props: { articles } };
};

export default Writing;
