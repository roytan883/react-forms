import { ReactNode } from 'react';
import { FormApi } from 'final-form';
import ComponentMapper from '../common-types/component-mapper';
import { ValidatorMapper } from '../validator-mapper';
import { ActionMapper } from '../form-renderer';
import Field from '../common-types/field';
import { AnyObject } from '../common-types/any-object';

export interface FormOptions extends FormApi {
  registerInputFile?: (name: string) => void;
  unRegisterInputFile?: (name: string) => void;
  onCancel?: (values: object, ...args: any[]) => void;
  onReset?: () => void;
  handleSubmit: () => Promise<AnyObject | undefined> | undefined;
  clearedValue?: any;
  renderForm: (fields: Field[]) => ReactNode[];
}

export interface RendererContextValue {
  componentMapper: ComponentMapper;
  validatorMapper: ValidatorMapper;
  actionMapper: ActionMapper;
  formOptions: FormOptions;
}

interface RendererContext {
  value: RendererContextValue;
}

export default RendererContext;
