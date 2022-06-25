import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                              title,
                                                              ...restProps
                                                            }) => {
  return (
    <div>
      <button {...restProps}>{title}</button>
    </div>
  );
};