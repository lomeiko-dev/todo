import React from "react";
import style from "../styles.module.scss";

interface IProps {
  children: React.ReactNode;
  errorList?: string[];
}

export const ErrorWrapper: React.FC<IProps> = (props) => {
  const { children, errorList } = props;

  return (
    <>
      <div className={style.error_list}>
        {errorList?.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
      {children}
    </>
  );
};
