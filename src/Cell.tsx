import { forwardRef, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import classnames from 'classnames';
import './style/Cell.scss'

export type CellProps = TdHTMLAttributes<HTMLElement>
  & ThHTMLAttributes<HTMLElement>
  & {
    children?: ReactNode,
    component?: 'td' | 'th',
    maxLength?: number,
  };

function Cell(props: CellProps, ref: any) {
  const { component: Component = 'td', children, ...rest } = props;
  const className = classnames('cell', props.className)
  return <Component ref={ref} {...rest} className={className}>
    <div className="cell__wrapper">
      {children}
    </div>
  </Component>
}

export default forwardRef(Cell)