import { PlusIcon } from "@phosphor-icons/react/ssr";
import { useLanguage } from "@/components/language-provider/language-provider";

type AddOnCardProps = { description: string; price: string; title: string };

const AddOnCard = ({ description, price, title }: AddOnCardProps) => {
  const { language } = useLanguage();
  return <article className="flex min-h-60 flex-col bg-[rgba(13,13,13,0.94)] p-5 max-[760px]:min-h-[200px]"><div className="flex items-center gap-2 text-[var(--color-gold)]"><PlusIcon aria-hidden="true" size={16} weight="bold" /><span className="text-[0.57rem] font-bold uppercase tracking-[0.1em]">{language === "fr" ? "Option" : "Add-on"}</span></div><h3 className="my-auto mb-[0.7rem] text-[1.25rem] font-normal tracking-[-0.04em]">{title}</h3><p className="m-0 text-[0.75rem] leading-normal text-[var(--color-fog)]">{description}</p><strong className="mt-[1.4rem] text-[0.72rem] font-normal text-[var(--color-gold)]">{price}</strong></article>;
};

export default AddOnCard;
