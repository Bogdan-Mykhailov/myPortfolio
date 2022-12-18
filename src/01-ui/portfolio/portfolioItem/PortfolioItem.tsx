import React from 'react';
import s from './PortfolioItem.module.css'

interface IPortfolioItem {
  wallpaper: string
  title: string
  description: string
  link: string
  wallpaperDescription: string
  linkTitle: string
}

export const PortfolioItem = ({
                                linkTitle,
                                link,
                                wallpaper,
                                title,
                                description,
                                wallpaperDescription} : IPortfolioItem) => {
  return (
    <div className={s.portfolioItem}>
      <img className={s.wallpaper} src={wallpaper} alt={wallpaperDescription}/>
      <a href={link}>{linkTitle}</a>
      <h3 className={s.projectName}>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  );
};
