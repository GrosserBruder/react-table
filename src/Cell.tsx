import { forwardRef, ReactNode, TdHTMLAttributes, ThHTMLAttributes, useState, useCallback } from "react";
import classnames from 'classnames';
import './style/Cell.scss'

export type CellProps = TdHTMLAttributes<HTMLElement>
  & ThHTMLAttributes<HTMLElement>
  & {
    children?: ReactNode,
    component?: 'td' | 'th',
    maxLength?: number,
    editable?: boolean,
    onDoubleClick?: (event: any) => void
    onBlur?: (event: any) => void
    editComponent?: ReactNode,
  };

function Cell(props: CellProps, ref: any) {
  const { component: Component = 'td', children, editable, editComponent, onDoubleClick, onBlur, ...rest } = props;

  const [isEdit, setIsEdit] = useState(false);

  const className = classnames('cell', props.className, {
    "cell--editable": isEdit
  })

  const onDoubleClickHandler = useCallback((event: any) => {
    setIsEdit(true)
    onDoubleClick?.(event);
  }, [onDoubleClick])

  const onBlurHandler = useCallback((event: any) => {
    setIsEdit(false)
    onBlur?.(event)
  }, [onBlur])

  return <Component
    ref={ref}
    {...rest}
    className={className}
    onDoubleClick={editable ? onDoubleClickHandler : undefined}
    onBlur={editable ? onBlurHandler : undefined}
  >
    <div className="cell__wrapper">
      {isEdit ? editComponent : children}
    </div>
  </Component>
}

export default forwardRef(Cell)