# React table

Данный компонент является оберткой для html-тегов `table`, `tbody`, `thead`, `tr`, `th`, `td`

## Параметры

### Table 
  `children` - дочерний компонент
  `className` - классы стилей для таблицы
  `striped` - цвет фона строк чередуются
  `containerProps` - классы стилей для контейнера таблицы
  `fixedTopTitle` - зафиксировать заголовок таблицы при вертикальном скролле
  `fixedLeftColumn` - зафиксировать левый столбец таблицы при горизонтальном скролле

### Body
`children` - дочерний компонент

### Head
`children` - дочерний компонент

### Row
`children` - дочерний компонент

### Cell
Данный компонент принимает все стандартные параметры `td` и `th`
   `children` - дочерний компонент
    `component` - определяет каким тегом отрисовывать ячейку: `td` или `th`, по умолчанию `td`
    `editable` - включает возможность отображение компонента редактирования прямо в ячейке. Но в этом случае необходимо определить `editComponent`.
    `onDoubleClick` - функция, которая будет вызываться при двойной нажатии на ячейку. Вызывается, когда `edutable = true`
    `onBlur` - функция, которая будет вызываться при двойной нажатии на ячейку. Вызывается, когда `edutable = true`
    `editComponent` - компонент редактирования значения в ячейке таблицы. Отображается при `edutable = true` и после двойного клика на ячейку

### CSS переменные
`--fixed-table-cell-background-color` - задает цвет фона для ячеек, которые находятся в зафиксированных верхнем заголовке или в левом столбце. Значение по умолчанию - `white`. 

## Пример использования

```js
const data = [
  {id: 0, name: "First item"},
  {id: 1, name: "Second item"}
  ];

const rows = data.map((item) => <Row key={item.id}>
  <Cell editable editComponent={<input />}>
    {item.id}
  </Cell>
  <Cell editable editComponent={<input />}>
    {item.name}
  </Cell>
</Row>)

function App() {
  return (
    <div className="App">
      <Table fixedTopTitle fixedLeftColumn>
        <Head>
          <Row>
            <Cell component="th">
              ID
            </Cell>
            <Cell component="th">
              Name
            </Cell>
          </Row>
        </Head>
        <Body>
          {rows}
        </Body>
      </Table>
    </div>
  );
}
```