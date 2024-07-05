import React, {useRef} from 'react';
import s from './Contacts.module.css'
import styles from "../../common/styles/Common.module.css";
import {Title} from "../../common/components/Title/Title";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID} from "../../constants/constants";

export const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any)  => {
  e.preventDefault();

    if (form.current) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current!, YOUR_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.currentTarget.reset();
    }
  }

  return (
    <section id='contacts' className={s.contacts}>
      <div className={`${styles.container} ${s.contactsContainer}`}>
        <Title title='Contact'/>
        <form ref={form} className={s.contactsForm} onSubmit={sendEmail}>
          <Fade direction={"up"} cascade damping={1e-1} triggerOnce duration={1000}>
            <input className={s.input} type="text" placeholder='Name' name='name'/>
            <input className={s.input} type="email" placeholder='E-mail' name='email'/>
            <textarea className={s.textarea} cols={30} rows={10} placeholder='Your message' name='message'></textarea>
            <button className={s.btn} type="submit">Send message</button>
          </Fade>
        </form>
      </div>
    </section>
  );
};
