import ParamEditor from '../components/ParamEditor';

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

const Page = () => {
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

  return (
    <main>
      <ParamEditor params={params} model={model} />
    </main>
  );
};

export default Page;
