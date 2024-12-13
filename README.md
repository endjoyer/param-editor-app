# Param Editor App

## Описание

Это простое React-приложение на TypeScript и Next.js, предназначенное для редактирования параметров модели товара. Пользователи могут изменять значения параметров, которые отображаются в форме, а также получить обновленную модель через метод `getModel()`.

## Технологии

- **Next.js 15.1.0**
- **React 19**
- **TypeScript**
- **TailwindCSS**
- **Jest** для тестирования

## Установка

### 1. Клонировать репозиторий

```bash
git clone https://github.com/your-username/param-editor-app.git
cd param-editor-app
```

### 2. Установить зависимости

```bash
yarn install
```

или

```bash
npm install
```

### 3. Запустить сервер

```bash
yarn dev
```

или

```bash
npm run dev
```

### 4. Собрать приложение

```bash
yarn build
```

или

```bash
npm run build
```

### 5. Запустить тесты

```bash
yarn test
```

или

```bash
npm run test
```

## Компоненты

### `ParamEditor.tsx`

Компонент для редактирования параметров товара. Принимает пропсы `params` и `model`:

- **params**: Массив параметров товара (ID и название).
- **model**: Объект модели товара с текущими значениями параметров и цветами.

Метод **`getModel()`** возвращает обновленную модель.

## Пример использования

```tsx
import ParamEditor from './components/ParamEditor';

const params = [
  { id: 1, name: 'Назначение' },
  { id: 2, name: 'Длина' },
];

const model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
  ],
  colors: ['красный', 'синий'],
};

<ParamEditor params={params} model={model} />;
```

## Лицензия

MIT License.
