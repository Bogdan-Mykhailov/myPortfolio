import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
  return (
    <section className={s.contactsWrapper} id='contacts'>
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <span className={s.title}>Contacts</span>
          <span className={s.subtitle}>Contacts</span>
          <hr className={s.yellowLine}/>
          <hr className={s.underYellowLine}/>
        </div>
      </div>
    </section>
  );
};