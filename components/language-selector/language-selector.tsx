"use client";

import { CaretDownIcon } from "@phosphor-icons/react/ssr";
import { useId, useState } from "react";

export type LanguageOption = { code: string; flag: string; label: string };

type LanguageSelectorProps = { onChange: (code: string) => void; options: LanguageOption[]; value: string };

const LanguageSelector = ({ onChange, options, value }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const selected = options.find((option) => option.code === value) ?? options[0];

  return <div className="language-selector" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false); }}><button aria-controls={menuId} aria-expanded={isOpen} aria-haspopup="listbox" className="language-selector__trigger" onClick={() => setIsOpen((open) => !open)} type="button"><span aria-hidden="true" className="language-selector__flag">{selected.flag}</span><span>{selected.label}</span><CaretDownIcon aria-hidden="true" size={12} weight="bold" /></button>{isOpen && <div aria-label="Select language" className="language-selector__menu" id={menuId} role="listbox">{options.map((option) => <button aria-selected={option.code === value} key={option.code} onClick={() => { onChange(option.code); setIsOpen(false); }} role="option" type="button"><span aria-hidden="true" className="language-selector__flag">{option.flag}</span>{option.label}</button>)}</div>}</div>;
};

export default LanguageSelector;
