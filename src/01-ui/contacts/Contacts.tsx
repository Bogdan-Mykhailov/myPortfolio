import React from 'react';
import s from './Contacts.module.css'
import styles from "../../common/styles/Common.module.css";

export const Contacts = () => {
  return (
    <section id='contacts' className={s.contacts}>
      <div className={`${styles.container} ${s.contactsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.contactsWrapper}>
          <form id='contactsForm' method='post' className={s.contactsInfo} action="http://localhost:3000">
            <input type="text"/>
            <input type="text"/>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <button type="submit" form='contactsForm'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
