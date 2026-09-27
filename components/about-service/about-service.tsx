type AboutServiceProps = { description: string; number: string; title: string };

const AboutService = ({ description, number, title }: AboutServiceProps) => <article className="about-service"><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>;

export default AboutService;
