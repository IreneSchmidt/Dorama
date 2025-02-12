export interface IField {
    key: string;
    type?: 'checkbox' | 'text' | 'select' | 'date' | 'number';
    label: string;
    required?: boolean;
    default?: string | boolean;
  }
  