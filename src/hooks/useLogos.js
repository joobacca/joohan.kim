import { useStaticQuery, graphql } from 'gatsby';

const useLogos = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/images/logos/(.)*.png/" } }) {
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

export default useLogos;
