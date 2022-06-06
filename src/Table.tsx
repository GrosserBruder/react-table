import { ReactElement, forwardRef, ForwardedRef, HTMLProps } from 'react';
import { BodyProps } from "./Body"
import { HeadProps } from "./Head"
import classnames from 'classnames';
import './style/Table.scss'

export type TableProps = {
  children: ReactElement<BodyProps | HeadProps>[] | ReactElement<BodyProps | HeadProps>
  className?: string;
  striped?: boolean;
  separateBorder?: boolean;
  containerProps?: HTMLProps<HTMLDivElement> & {
    className?: string;
  }
  noBorder?: boolean
  cellShadow?: boolean
  fixedTopTitle?: boolean
  fixedLeftColumn?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table(props: TableProps, ref: ForwardedRef<any>) {
  const { children, containerProps = {}, cellShadow, noBorder, separateBorder, striped } = props;
  const { className: containerClassName, ...otherContainerProps } = containerProps
  const className = classnames('table', props.className, {
    'table--striped': striped,
    'table--separate-border': separateBorder,
    'table--no-border': noBorder,
    'table--cell-shadow': cellShadow,
  })
  const newContainerClassName = classnames('table__container', containerClassName)
  return <div className={newContainerClassName} ref={ref} {...otherContainerProps}>
    <table className={className}>
      {children}
    </table>
  </div>
}

export default forwardRef(Table)