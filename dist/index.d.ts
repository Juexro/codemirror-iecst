import { parser } from "./st.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare const iecstLanguage: LRLanguage;
declare function iecst(): LanguageSupport;
export { iecstLanguage, iecst, parser };
