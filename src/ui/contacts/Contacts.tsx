import React from 'react';
import s from './Contacts.module.css'
import styles from "../../common/styles/Common.module.css";
import {Title} from "../../common/components/Title/Title";

export const Contacts = () => {
  return (
    <section id='contacts' className={s.contacts}>
      <div className={`${styles.container} ${s.contactsContainer}`}>
        <Title title='Contact'/>
          <form className={s.contactsForm} method='post' action="http://localhost:3000">
            <input className={s.input} type="text" placeholder='Name'/>
            <input className={s.input} type="email" placeholder='E-mail'/>
            <textarea className={s.textarea} name="" id="" cols={30} rows={10} placeholder='Your message'></textarea>
            <button className={s.button} type="submit">Send message</button>
          </form>
      </div>
    </section>
  );
};
