import NextHead from 'next/head'

const defaultDescription = '';

export interface IHeadProps {
  title: string,
  description: string,
}

export default (props: IHeadProps) => (
<NextHead>
  <meta charSet="UTF-8" />
  <title>{props.title || ''}</title>
  <meta name="description" content={props.description || defaultDescription} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/static/bigLeader.ico" />
</NextHead>
);

