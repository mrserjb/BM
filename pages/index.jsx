import '../src/style.css'
import Icon from '@mdi/react';
import { LogoImage } from '../src/components/LogoImage';
import { ColumnLayout } from '../src/components/ColumnLayout';
import { ContactForm } from '../src/components/ContactForm';
import { mdiPhone, mdiEmailEditOutline, mdiEmailOutline, mdiCellphoneIphone, mdiChevronDown, mdiCartArrowDown, mdiClose, mdiCheck } from '@mdi/js';
import Modal from 'react-modal';
import React, { useState } from 'react';

const Typograf = require('typograf');
const tp = new Typograf({ locale: ['ru', 'en-US'] });

const EMAIL = process.env.EMAIL

function ColumnBody({ title, children }) {
    return (
        <>
            <h2>{title}</h2>
            <p>
                {children}
                {/* {tp.execute(children)} */}
            </p>
        </>
    )
}

function ResponsiveIcon(props) {
    return (
        <a
            href={props.href}
            style={{
                minWidth: 40,
                width: '100%',
                maxWidth: 100,
                position: 'relative',
            }}
        >
            <div
                style={{
                    paddingBottom: '100%',
                    backgroundColor: props.backgroundColor,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Icon path={props.path} color={props.color} size={props.size} />
                </div>
            </div>
        </a>
    )
}

Modal.setAppElement('.welcome') // это нужно вызвать на рут элемент 

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
 
    return (
        <>
            <div className={'welcome'}>
                <h1
                    style={{
                        flex: 1,
                    }}
                >
                    {tp.execute('Купите бизнес - живите в Сочи.')}</h1><br />
                <h1
                    style={{
                        flex: 1,
                    }}
                >
                    {tp.execute('Мы уже в Сочи. ')}</h1>
                <div className={'logo'}>
                    <div style={{
                        flex: 1
                    }}>
                        <ResponsiveIcon
                            href={'tel:+79633473675'}
                            path={mdiPhone}
                            color="#424343"
                            size={2}
                        />
                        <ResponsiveIcon
                            href={'tel:+79628839222'}
                            path={mdiCellphoneIphone}
                            color="#424343"
                            size={2}
                        />
                        <ResponsiveIcon
                            href={'mailto:ek@бизнесмаркет.com'}
                            path={mdiEmailOutline}
                            color="#424343"
                            size={2}
                        />
                        <ResponsiveIcon
                            href={'mailto:ks@бизнесмаркет.com'}
                            path={mdiEmailEditOutline}
                            color="#424343"
                            size={2}
                        />
                        <ResponsiveIcon
                            href={'https://www.avito.ru/user/b13f450aaa32a0663ee99dca74b65902/profile?id=1773264284&src=item'}
                            path={mdiCartArrowDown}
                            color="#424343"
                            size={2}
                        />
                    </div>
                    <LogoImage />
                </div >
            </div >

            <ColumnLayout>
                <ColumnBody
                    title={'Покупка готового бизнеса и франшиз'}
                >
                    Вход в бизнес через готовое бизнес решение, будь то готовый бизнес или франшиза позволит Вам избежать массы ошибок и сэкономить время на старте, а главное уменьшить затраты (особенно готовый бизнес) и начать зарабатывать с первого дня. Цена готового бизнеса подчас равна цене активов и позволяет окупить вложения в короткий срок (в среднем — год, полтора). Покупая франшизу и готовый бизнес, Вы становитесь собственником популярного, известного потребителю предприятия с налаженными бизнес-процессами. Предыдущий собственник или франчайзер расскажут Вам обо всех подводных камнях, передадут клиентов, поставят квалифицированный персонал и проверенных партнеров, организуют сбыт. Зачем рисковать своими деньгами, если можно пожать плоды чужого тернистого пути?! Покупая и продавая готовый бизнес и франшизы с бизнес-брокерским агентством «Бизнес Маркет» Вы можете быть уверены в чистоте сделки.
                    
                    <button className="contact" onClick={() => setModalIsOpen(true)} >Купить бизнес</button>
                    <button className="contact2" onClick={() => setModalIsOpen(true)} >Продать бизнес</button>
                </ColumnBody>
                
                <ColumnBody
                    title={'Маркетинг и реклама'}
                >
                    «Реклама двигатель торговли» — банальная, прописанная истина. Но в наш информационный век — реклама, это инвестиция, которая на рубль вложения должна принести Вам минимум рубль прибыли обратно, а лучше 15. Агентство «Бизнес Маркет» занимается маркетингом и всеми видами продвижения: анализ рынка, Интернет продвижение, офф-лайн, спец проекты, медиа. Больше всего мы любим рекламу, которая продает и остается в истории. Звоните сейчас)!
                    <br></br><br></br><br></br>
                    <h2>Консалтинг</h2>
                
                    Консалтинг от агентства «Бизнес Маркет» это решение конкретных бизнес задач, анализ показателей финансовой деятельности, анализ бизнес процессов и бизнес модели, подбор и обучение персонала, разработка систем обучения и адаптации, поиск новых рынков сбыта и упаковка товаров и услуг. Нам удалось сделать это для большой гастрономической сети, партии Яблоко, авто ритейла и других.
                </ColumnBody>
                <ColumnBody
                    title={'Бизнес под ключ'}
                >
                    Если Вы, все-таки, решили «делать бизнес под себя» и отказаться от покупки готового бизнеса, агентство «Бизнес Маркет» будет полезно Вам и на этом пути. Наши менеджеры накопили широкий опыт в различных отраслях бизнеса (отели, салоны красоты, автобизнес, рестораны и кафе, продажа товаров и услуг и пр), имеют компетенции по анализу и оптимизации бизнес-процессов, в маркетинге, рекламе, набору и обучению персонала, владеют налаженными бизнес связями в Краснодарском крае, Санкт-Петербурге и ЛО. Будем рады помочь Вам в создание своего бизнеса.
                </ColumnBody>
                
                <ColumnBody
                    title={'Недвижимость в Сочи'}
                >
                    Рынок недвижимости в Сочи дик и аутентичен, как первобытные африканские племена. Риски покупателя соизмеримы с рисками пилигримов, но недвижимость в Сочи желанна не менее, чем золото этих племен. Покупайте с теми, кому Вы доверяете, доверяете нам — покупайте с нами, или покупайте с теми, кому доверяете. Мы приложим все усилия, что бы Вы купили безопасную и качественную недвижимость в Сочи в рамках своего бюджета.
                </ColumnBody>
            </ColumnLayout>

            <div className={'footer'}>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <h3>Контакты</h3>
                    <p className={'footer_p'}
                        style={{
                        }}>
                        {('Краснодарский край')} <br />
                        {('Сочи, ул. Конституции СССР, дом18, пом.619')} <br />
                        {('Телефон: +7 (963) 347-3675, +7 (962) 883-9222')}<br />
                        {('E-mail: ek@бизнесмаркет.com, ks@бизнесмаркет.com')}<br /><br />
                        <a href="https://www.avito.ru/user/b13f450aaa32a0663ee99dca74b65902/profile?id=1773264284&src=item">НАШИ ЛОТЫ</a><br/><br/>
                    </p>
                </div>
                <LogoImage height={50} />
            </div>

            <ContactForm 
                modalIsOpen={modalIsOpen} 
                onClose={setModalIsOpen} 
                email={EMAIL}
            />
        </>
    )
}
