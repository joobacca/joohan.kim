import SocialImage from "./SocialImage"

const SocialLink = ({ src, href, title, ...props }) => {
  return (
    <a href={href} title={title} target="_blank" rel="noreferrer nofollower" {...props}>
      <SocialImage src={src} alt={title} />
    </a>
  );
}

export default SocialLink;
