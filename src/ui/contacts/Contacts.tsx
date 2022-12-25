import React from 'react';
import s from './Contacts.module.css'
import styles from "../../common/styles/Common.module.css";
import {Title} from "../../common/components/Title/Title";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {
  return (
    <section id='contacts' className={s.contacts}>
      <div className={`${styles.container} ${s.contactsContainer}`}>
        <Title title='Contact'/>
        <form className={s.contactsForm}>
          <Fade direction={"up"} cascade damping={1e-1} triggerOnce duration={1000}>
            <input className={s.input} type="text" placeholder='Name'/>
            <input className={s.input} type="email" placeholder='E-mail'/>
            <textarea className={s.textarea} name="" id="" cols={30} rows={10} placeholder='Your message'></textarea>
            <button className={s.btn} type="submit">Send message</button>
          </Fade>
        </form>
      </div>
    </section>
  );
};
