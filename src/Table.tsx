import { ReactElement, forwardRef, ForwardedRef, HTMLProps } from 'react';
import { BodyProps } from "./Body"
import { HeadProps } from "./Head"
import classnames from 'classnames';
import './style/Table.scss'

export type TableProps = {
  children: ReactElement<BodyProps | HeadProps>[] | ReactElement<BodyProps | HeadProps>
  className?: string;
  striped?: boolean;
  containerProps?: HTMLProps<HTMLDivElement> & {
    className?: string;
  }
  fixedTopTitle?: boolean
  fixedLeftColumn?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _Table(props: TableProps, ref: ForwardedRef<any>) {
  const { children, containerProps = {}, striped, fixedLeftColumn, fixedTopTitle } = props;
  const { className: containerClassName, ...otherContainerProps } = containerProps
  const className = classnames('table', props.className, {
    'table--striped': striped,
    'table--fixed-top-title': fixedTopTitle,
    'table--fixed-left-column': fixedLeftColumn,
  })

  const newContainerClassName = classnames('table__container', containerClassName)
  return <div className={newContainerClassName} ref={ref} {...otherContainerProps}>
    <table className={className}>
      {children}
    </table>
  </div>
}

export const Table = forwardRef(_Table)

export default Table