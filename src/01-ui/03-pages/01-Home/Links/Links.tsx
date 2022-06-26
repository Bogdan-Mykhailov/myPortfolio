import React from 'react';
import s from './Links.module.css'
import facebook from '../../../../assets/svg/facebook-brands.svg'
import instagram from '../../../../assets/svg/instagram-brands.svg'
import linkedin from '../../../../assets/svg/linkedin-brands.svg'
import twitter from '../../../../assets/svg/twitter-brands.svg'

export const Links = () => {
  return (
    <div>
      <div className={s.socialGroup}>
        <div className={s.socialLinks}>
          <a href="https://www.facebook.com" className={s.socialBtn}>
            <div>
              <img src={facebook} alt='facebook' className={s.socialIcon}/>
            </div>
            <span className={s.iconName}>Facebook</span>
          </a>
          <a href="https://www.instagram.com" className={s.socialBtn}>
            <span><img src={instagram} alt='instagram' className={s.socialIcon}/></span>
            <span className={s.iconName}>Instagram</span>
          </a>
          <a href="https://www.linkedin.com" className={s.socialBtn}>
            <span><img src={linkedin} alt='linkedin' className={s.socialIcon}/></span>
            <span className={s.iconName}>Linkedin</span>
          </a>
          <a href="https://twitter.com" className={s.socialBtn}>
            <span><img src={twitter} alt='twitter' className={s.socialIcon}/></span>
            <span className={s.iconName}>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}