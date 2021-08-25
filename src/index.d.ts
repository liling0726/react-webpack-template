declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
  }

declare function If(params: any): any;
declare function Choose(params: any): any;
declare function When(params: any): any;
declare function Otherwise(params: any): any;
declare function For(params: any): any;
