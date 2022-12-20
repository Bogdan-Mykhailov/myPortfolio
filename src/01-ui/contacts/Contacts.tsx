import React from 'react';
import s from './Contacts.module.css'
import styles from "../../common/styles/Common.module.css";

export const Contacts = () => {
  return (
    <section id='contacts' className={s.contacts}>
      <div className={`${styles.container} ${s.contactsContainer}`}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.contactsWrapper}>
          <form className={s.contactsInfo} method='post' action="http://localhost:3000">
            <input className={s.input} type="text"/>
            <input className={s.input} type="email"/>
            <textarea className={s.textarea} name="" id="" cols={30} rows={10}></textarea>
          </form>
            <button className={s.button} type="submit">Submit</button>
        </div>
      </div>
    </section>
  );
};
