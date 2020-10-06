import { useStaticQuery, graphql } from 'gatsby';

// hook name is obviously meant as a joke (:
const useMyPrettyFace = () => {
  const face = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "images/joo.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  `)
  return face;
};

export default useMyPrettyFace;
