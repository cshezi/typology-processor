/* eslint-disable camelcase */

export interface IRuleValue {
  id: string;
  cfg: string;
  ref: string;
  true: number;
  false: number;
}

export interface IRule {
  id: string;
  cfg: string;
  ref?: string;
}

export interface IExpression {
  operator: string;
  terms: IRule[];
  expression: IExpression | undefined;
}

export interface ITypologyExpression {
  id: string;
  cfg: string;
  desc?: string | undefined;
  rules: IRuleValue[];
  threshold: number;
  expression: IExpression;
}
