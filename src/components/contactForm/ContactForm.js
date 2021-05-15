import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Completed from './Completed'
import axios from 'axios'
import { motion } from 'framer-motion'

import './ContactForm.scss'

function ContactForm() {
  const [formComplete, setFormComplete] = useState(false);
  const [name, setName] = useState('')

  const [isBranding, setBranding] = useState('false');
  const [isSite, setSite] = useState('false');
  const [isSmm, setSmm] = useState('false');
  const [isShop, setShop] = useState('false');
  const [isSocial, setSocial] = useState('false');
  const [isApp, setApp] = useState('false');
  const [isMedia, setMedia] = useState('false');

  const url = '/api/telegram.php'

  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});

  const onSubmit = data => (

    axios.post(url, {
      'service_branding': data.branding,
      'service_site': data.site,
      'service_smm': data.smm,
      'service_shop': data.shop,
      'service_social': data.social,
      'service_app': data.app,
      'service_media': data.media,
      'user_name': data.name,
      'user_phone': data.phone,
      'user_about': data.about,
      'user_cost': data.cost
    })
    .then(function () {
      setFormComplete(!formComplete)
      setName(data.name)
    })
  );

  return (
    <div className="containerForm">
      <motion.h2 
        initial={{ opacity: 0, y: -30, scale: 0.9}}
        animate={{ opacity: 1, y: 0, scale: 1}}
        exit={{ opacity: 0, y: -30, scale: 0.9}}
        transition={{duration: 0.4, type: "tween"}}
        className="contactHeader"
        >Расскажите о Вашем <span>проекте</span></motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: 30}}
        transition={{duration: 0.6, type: "tween", delay: 0.1}}
        className="contactDescription"
        >Заполните форму или свяжитесь с<br />нами <a href='https://tlgg.ru/@klisakov'>в telegram</a>, а также <a href='tel:+79135351898'>+7 (913) 535-18-98</a></motion.p>

      <motion.form
        initial={{y: 300, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="inputForm">
          <p>1. Выберите то, что Вам интересно</p>
          <div className="checkList">

          <div className="checkContainer">
            <label htmlFor="branding" className={isBranding ? 'check' : 'check active'}>
              <span className="checkLabel">Брендинг</span>
              <input className="checkBox" type="checkbox" {...register("branding")} id='branding' value='Брендинг' onClick={() => setBranding(!isBranding)}/>
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="site" className={isSite ? 'check' : 'check active'}>
              <span className="checkLabel">Сайт</span>
              <input className="checkBox" type="checkbox" {...register("site", {})} id="site" value='Сайт' onClick={() => setSite(!isSite)} />
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="smm" className={isSmm ? 'check' : 'check active'}>
              <span className="checkLabel">Продвижение</span>
              <input className="checkBox" type="checkbox" {...register("smm", {})} id="smm" value='Продвижение' onClick={() => setSmm(!isSmm)} />
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="shop" className={isShop ? 'check' : 'check active'}>
              <span className="checkLabel">Интернет магазин</span>
              <input className="checkBox" type="checkbox" {...register("shop", {})} id="shop" value='Интернет магазин' onClick={() => setShop(!isShop)} />
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="social" className={isSocial ? 'check' : 'check active'}>
              <span className="checkLabel">Социальные сети</span>
              <input className="checkBox" type="checkbox" {...register("social", {})} id="social" value='Социальные сети' onClick={() => setSocial(!isSocial)} />
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="app" className={isApp ? 'check' : 'check active'}>
              <span className="checkLabel">Приложение</span>
              <input className="checkBox" type="checkbox" {...register("app", {})} id="app" value='Приложение' onClick={() => setApp(!isApp)} />
            </label>
          </div>

          <div className="checkContainer">
            <label htmlFor="media" className={isMedia ? 'check' : 'check active'}>
              <span className="checkLabel">Фото и Видео</span>
              <input className="checkBox" type="checkbox" {...register("media", {})} id="media" value='Фото и Видео' onClick={() => setMedia(!isMedia)} />
            </label>
          </div>

          </div>
        </div>

        <div className="inputForm">
          <p className="inputPlaceholder">2. Ваше имя</p>
          <input {...register("name", 
          { 
            required: 'Введите имя, мы хотим с Вами познакомиться',
            maxLength: { value: 30, message: 'Слишком длинное имя... есть варианты покороче?'},
            pattern: {value: /^[А-Яа-яЁё\s]+$/i, message: 'Only Russian language, please'}
          })} 
          placeholder="Введите Ваше имя" autoComplete="off"/>
          {errors.name && <span className="errorMessage">{errors.name.message}</span>}
        </div>

        <div className="inputForm">
          <p className="inputPlaceholder">3. Ваш email или телефон</p>
          <input {...register("phone", 
          { 
            required: 'Оставьте Ваши контакты для связи и мы обязательно ответим',
            maxLength: { value: 30, message: 'Мы думали 30 символов должно хватить... кажется Вы немного перестарались'},
          })} 
          placeholder="Введите Ваш email или телефон" autoComplete="off"/>
          {errors.phone && <span className="errorMessage">{errors.phone.message}</span>}
        </div>

        <div className="inputForm">
          <p className="inputPlaceholder">4. О проекте</p>
          <textarea {...register("about", 
          { 
            required: 'Хотя бы пару слов о Вашем проекте',
          })} 
          placeholder="Расскажите о Вашем проекте" rows="1" autoComplete="off"/>
          {errors.about && <span className="errorMessage">{errors.about.message}</span>}
        </div>

        <div className="inputForm">
          <p className="inputPlaceholder">5. Бюджет проекта</p>
          <input {...register("cost")} placeholder="Введите бюджет Вашего проекта" autoComplete="off"/>
        </div>

        <div className="formSubmit">
          <button type="submit" className="formButton">Отправить</button>
        </div>
      </motion.form>

      { formComplete && (
        <Completed name={name}/>
      )}

    </div>
  )
}

export default ContactForm
