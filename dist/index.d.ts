import { parser } from "./st.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { Extension, StateField, RangeSet } from "@codemirror/state";
import { Completion } from "@codemirror/autocomplete";
import { BlockInfo, EditorView, GutterMarker } from "@codemirror/view";
declare const iecstLanguage: LRLanguage;
declare function iecst(): LanguageSupport;
interface ICompletion extends Completion {
    children?: ICompletion[];
    alias?: string | string[];
}
declare function autocomplete(data?: ICompletion[]): Extension;
declare const breakpointEffect: import("@codemirror/state").StateEffectType<{
    pos: number;
    on: boolean;
}>;
declare const breakpointState: StateField<RangeSet<GutterMarker>>;
declare function toggleBreakpoint(view: EditorView, pos: number): {
    pos: number;
    on: boolean;
};
declare const breakpointMarker: {
    toDOM(): HTMLSpanElement;
    eq(other: GutterMarker): boolean;
    elementClass: string;
    destroy(dom: Node): void;
    startSide: number;
    endSide: number;
    mapMode: import("@codemirror/state").MapMode;
    point: boolean;
    range(from: number, to?: number | undefined): import("@codemirror/state").Range<any>;
};
declare const hoverBreakpointMarker: {
    toDOM(): HTMLSpanElement;
    eq(other: GutterMarker): boolean;
    elementClass: string;
    destroy(dom: Node): void;
    startSide: number;
    endSide: number;
    mapMode: import("@codemirror/state").MapMode;
    point: boolean;
    range(from: number, to?: number | undefined): import("@codemirror/state").Range<any>;
};
declare const hoverBreakpointEffect: import("@codemirror/state").StateEffectType<{
    pos: number;
    on: boolean;
}>;
declare const hoverBreakpointState: StateField<RangeSet<GutterMarker>>;
interface BreakpointGutterBuilderOptions {
    click?: (view: EditorView, blockInfo: BlockInfo, newState: {
        line: number;
        on: boolean;
        pos: number;
    }) => void;
}
declare function getMarkerLines(view: EditorView): import("@codemirror/state").Line[];
declare function breakpointGutter(options?: BreakpointGutterBuilderOptions): (import("@codemirror/state").Extension | StateField<RangeSet<GutterMarker>>)[];
interface SetupOptions {
    lineNumbers: boolean;
    highlightActiveLineGutter: boolean;
    highlightSpecialChars: boolean;
    history: boolean;
    foldGutter: boolean;
    drawSelection: boolean;
    dropCursor: boolean;
    allowMultipleSelections: boolean;
    indentOnInput: boolean;
    syntaxHighlighting: boolean;
    bracketMatching: boolean;
    closeBrackets: boolean;
    autocompletion: boolean;
    rectangularSelection: boolean;
    crosshairCursor: boolean;
    highlightActiveLine: boolean;
    highlightSelectionMatches: boolean;
    keymap: boolean;
    breakpointGutter: boolean;
}
declare function setup(options?: Partial<SetupOptions>): Extension[];
export { iecstLanguage, iecst, parser, ICompletion, autocomplete, breakpointEffect, breakpointState, toggleBreakpoint, breakpointMarker, hoverBreakpointMarker, hoverBreakpointEffect, hoverBreakpointState, BreakpointGutterBuilderOptions, getMarkerLines, breakpointGutter, SetupOptions, setup };
export { EditorView } from "@codemirror/view";
