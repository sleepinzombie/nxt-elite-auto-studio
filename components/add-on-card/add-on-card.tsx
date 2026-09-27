import { PlusIcon } from "@phosphor-icons/react/ssr";
import { useLanguage } from "@/components/language-provider/language-provider";

type AddOnCardProps = { description: string; price: string; title: string };

const AddOnCard = ({ description, price, title }: AddOnCardProps) => {
  const { language } = useLanguage();
  return <article className="add-on-card"><div><PlusIcon aria-hidden="true" size={16} weight="bold" /><span>{language === "fr" ? "Option" : "Add-on"}</span></div><h3>{title}</h3><p>{description}</p><strong>{price}</strong></article>;
};

export default AddOnCard;
