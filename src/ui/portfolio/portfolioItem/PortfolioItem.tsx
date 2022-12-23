import React from 'react';
import s from './PortfolioItem.module.css'

type StyleType = {
  backgroundImage: string
}

interface IPortfolioItem {
  style: StyleType
  title: string
  description: string
  link: string
  linkTitle: string
}

export const PortfolioItem = ({
                                style,
                                linkTitle,
                                link,
                                title,
                                description
                              }: IPortfolioItem) => {
  return (
    <div className={s.portfolioItem}>
      <div className={s.imgWrapper} style={style}>
        <a target="_blank" className={s.link} href={link}>{linkTitle}</a>
      </div>
      <div className={s.projectInfo}>
        <h3 className={s.projectName}>{title}</h3>
        <span className={s.description}>{description}</span>
      </div>
    </div>
  );
};
