# React table

Данный компонент является оберткой для html-тегов `table`, `tbody`, `thead`, `tr`, `th`, `td`

## Оглавление

[Table](#Table)
[Body](#Body)
[Head](#Head)
[Row](#Row)
[Cell](#Cell)
[CSS переменные](#CSS_переменные)
[Пример использования](#Пример_использования)
[Body](#Body)

### <a name="Table">Table</a>

- `children` - дочерний компонент
- `className` - классы стилей для таблицы
- `striped` - цвет фона строк чередуются
- `containerProps` - классы стилей для контейнера таблицы
- `fixedTopTitle` - зафиксировать заголовок таблицы при вертикальном скролле
- `fixedLeftColumn` - зафиксировать левый столбец таблицы при горизонтальном скролле

### <a name="Body">Body</a>

- `children` - дочерний компонент

### <a name="Head">Head</a>

- `children` - дочерний компонент

### <a name="Row">Row</a>

- `children` - дочерний компонент

### <a name="Cell">Cell</a>

Данный компонент принимает все стандартные параметры `td` и `th`

- `children` - дочерний компонент
- `component` - определяет каким тегом отрисовывать ячейку: `td` или `th`, по умолчанию `td`
- `editable` - включает возможность отображение компонента редактирования прямо в ячейке. Но в этом случае необходимо определить `editComponent`.
- `onDoubleClick` - функция, которая будет вызываться при двойной нажатии на ячейку.
- `onBlur` - функция, которая будет вызываться при двойной нажатии на ячейку. Вызывается, когда `edutable = true`
- `editComponent` - компонент редактирования значения в ячейке таблицы. Отображается при `edutable = true` и после двойного клика на ячейку

### <a name="CSS_переменные">CSS переменные</a>

- `--fixed-table-cell-background-color` - задает цвет фона для ячеек, которые находятся в зафиксированных верхнем заголовке или в левом столбце. Значение по умолчанию - `white`.
- `--table-striped-odd-row-background-color` - цвет фона нечетных строк при `striped=true`. Значение по умолчанию - `#e8eaf6`
- `--table-striped-even-row-background-color` - цвет фона четных строк при `striped=true`. Значение по умолчанию - `white`
- `--table-row-hover-background-color` - цвет фона при наведении на строку. Значение по уумолчанию - `#c5cae9`

## <a name="Пример_использования">Пример использования</a>

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
            <Cell component="th">1
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
