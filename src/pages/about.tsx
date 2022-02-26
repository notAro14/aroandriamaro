import Head from 'next/head';

import Box from 'shared/box';
import Flex from 'shared/flex';
import PageLayout from 'shared/layout/page-layout';
import Text from 'shared/text';
import { NextPageWithLayout } from 'types';
import PageHeading from 'features/page-heading';
import PageParagraph from 'features/page-paragraph';

const STACK = [
  { label: 'Framework', value: 'typescript, react' },
  { label: 'Styling', value: 'emotion, styled system' },
  {
    label: 'Testing',
    value: 'testing library, msw, cypress',
  },
  {
    label: 'Data fetching',
    value: 'react-query or rtk query',
  },
  { label: 'Backend', value: 'node.js' },
];

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Aro Andriamaro</title>
        <meta name='description' content='Get to know Aro Andriamaro' />
        <meta
          name='keywords'
          content='about, aro, aroniaina, aro andriamaro, aroniaina andriamaro'
        />
      </Head>
      <PageHeading>About</PageHeading>
      <PageParagraph>
        Hello, I&apos;m Aro. I&apos;m a frontend developer based in Lyon,
        France.
      </PageParagraph>
      <PageParagraph>
        I graduated in electronic engineering and worked in this field for about
        2 years before switching to web development.
      </PageParagraph>
      <PageHeading>Tech</PageHeading>
      <PageParagraph>My primary tech stack</PageParagraph>
      <Box as='ul'>
        {STACK.map(({ label, value }) => (
          <Flex color='text' alignItems='flex-end' gap={4} key={label} as='li'>
            <Text
              fontWeight={100}
              as='strong'
              color='tint'
              fontSize={['md', 'lg']}
            >
              {label}
            </Text>
            <Text fontWeight={100} fontStyle='italic' as='span'>
              {value}
            </Text>
          </Flex>
        ))}
      </Box>
    </>
  );
};

About.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default About;
