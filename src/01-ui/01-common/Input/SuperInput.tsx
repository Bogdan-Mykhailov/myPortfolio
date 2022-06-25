import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                             type,
                                                             onChange,
                                                             onChangeText,
                                                             ...restProps
                                                           }) => {

  const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
  }


  return (
    <div>
      <input
        type={type}
        {...restProps}
        onChange={onChangeCallBack}
      />
    </div>
  );
};
