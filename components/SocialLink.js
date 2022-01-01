import SocialImage from "./SocialImage"

const SocialLink = ({ src, href, title, ...props }) => {
  return (
    <a href={href} title={title} target="_blank" {...props}>
      <SocialImage src={src} />
    </a>
  );
}

export default SocialLink;
