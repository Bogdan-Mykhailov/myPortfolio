import React from 'react';
import s from './PortfolioItem.module.css'

interface IPortfolioItem {
  title: string
  description: string
  link: string
  linkTitle: string
}

export const PortfolioItem = ({
                                linkTitle,
                                link,
                                title,
                                description} : IPortfolioItem) => {
  return (
    <div className={s.portfolioItem}>
      <div className={s.imgWrapper}>
        <a className={s.link} href={link}>{linkTitle}</a>
      </div>
      <h3 className={s.projectName}>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  );
};
