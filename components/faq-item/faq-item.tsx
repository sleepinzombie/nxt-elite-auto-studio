"use client";

import { PlusIcon } from "@phosphor-icons/react/ssr";
import { trackEvent } from "@/lib/analytics";

type FaqItemProps = { question: string; answer: string };

const FaqItem = ({ question, answer }: FaqItemProps) => <details className="faq-item" onToggle={(event) => { if (event.currentTarget.open) trackEvent("faq_open", { question }); }}><summary>{question}<PlusIcon aria-hidden="true" size={17} weight="bold" /></summary><p>{answer}</p></details>;

export default FaqItem;
