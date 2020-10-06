import { useStaticQuery, graphql } from 'gatsby';

const useSocialMedia = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/images/socialmedia/(.)*.png/" } }) {
        nodes {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
          name
        }
      }
    }
  `);
  return data;
};

export default useSocialMedia;
