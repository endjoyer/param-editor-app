// ParamEditor.tsx
'use client';
import React, { useState } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: string[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );

  const handleChange = (paramId: number, value: string) => {
    setParamValues((prevValues) =>
      prevValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      )
    );
  };

  const getModel = (): Model => {
    return {
      paramValues,
      colors: model.colors,
    };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Редактор параметров
        </h1>
        <form className="space-y-4">
          {params.map((param) => (
            <div key={param.id} className="flex flex-col">
              <label
                htmlFor={`param-${param.id}`}
                className="mb-1 text-sm font-medium text-gray-700"
              >
                {param.name}
              </label>
              <input
                id={`param-${param.id}`}
                type="text"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={
                  paramValues.find((pv) => pv.paramId === param.id)?.value || ''
                }
                onChange={(e) => handleChange(param.id, e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => console.log(getModel())}
          >
            Get Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParamEditor;
