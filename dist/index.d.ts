import { parser } from "./st.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { Completion } from "@codemirror/autocomplete";
declare const iecstLanguage: LRLanguage;
declare function iecst(): LanguageSupport;
interface ICompletion extends Completion {
    children?: ICompletion[];
    alias?: string | string[];
}
declare function autocomplete(data?: ICompletion[]): Extension;
export { iecstLanguage, iecst, parser, ICompletion, autocomplete };
