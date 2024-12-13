import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ParamEditor from './ParamEditor';
import { Param } from '../app/page';

describe('ParamEditor', () => {
  const params: Param[] = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
  ];

  const model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' },
    ],
    colors: ['#FFFFFF', '#000000'],
  };

  it('renders all parameters with initial values', () => {
    render(<ParamEditor params={params} model={model} />);

    params.forEach((param) => {
      const input = screen.getByLabelText(param.name);
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(
        model.paramValues.find((pv) => pv.paramId === param.id)?.value || ''
      );
    });
  });

  it('updates parameter values on input change', () => {
    render(<ParamEditor params={params} model={model} />);

    const input = screen.getByLabelText('Назначение');
    fireEvent.change(input, { target: { value: 'спорт' } });

    expect(input).toHaveValue('спорт');
  });

  it('logs the updated model on button click', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<ParamEditor params={params} model={model} />);

    const button = screen.getByText('Get Model');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith({
      paramValues: [
        { paramId: 1, value: 'повседневное' },
        { paramId: 2, value: 'макси' },
      ],
      colors: ['#FFFFFF', '#000000'],
    });

    consoleSpy.mockRestore();
  });
});
