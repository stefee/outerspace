export = outerspace;
declare function outerspace(strings: TemplateStringsArray, ...exprs: any[]): string;
declare namespace outerspace {
  export function wrap(before: string, s: string, after: string): string;
  export function before(s: string, before: string): string;
  export function after(s: string, after: string): string;
}
