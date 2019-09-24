import '../src/style.css'
import Icon from '@mdi/react';
import { LogoImage } from '../src/components/LogoImage';
import { ColumnLayout } from '../src/components/ColumnLayout';
import { mdiPhone, mdiEmailEditOutline, mdiEmailOutline, mdiCellphoneIphone, mdiChevronDown, mdiCartArrowDown, mdiClose, mdiCheck } from '@mdi/js';
import Modal from 'react-modal';
import React, { useState } from 'react';
import { types } from 'util';

const Typograf = require('typograf');
const tp = new Typograf({ locale: ['ru', 'en-US'] });

console.log(tp.execute(' Мир - мой мир!!   '));

function ColumnBody({ title, children }) {
    return (
        <>
            <h2>{title}</h2>
            <p>
                {tp.execute(children)}
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

function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formSent, setFormSent] = useState(false);

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
                    Вход в бизнес через готовое бизнес решение, будь то готовый бизнес или франшиза позволит Вам избежать массы ошибок и сэкономить время на старте, а главное уменьшить затраты (особенно готовый бизнес) и начать зарабатывать с первого дня.

                    Цена готового бизнеса подчас равна цене активов и позволяет окупить вложения в  короткий срок (в среднем – год, полтора). Покупая франшизу и готовый бизнес, Вы становитесь собственником популярного, известного потребителю  предприятия с налаженными бизнес-процессами.

                    Предыдущий собственник или франчайзер расскажут Вам обо всех подводных камнях, передадут клиентов, поставят квалифицированный персонал и проверенных партнеров, организуют сбыт.
                    Зачем рисковать своими деньгами, если можно пожать плоды чужого тернистого пути!?

                    Покупая и продавая готовый бизнес и франшизы с бизнес-брокерским агентством «Бизнес Маркет» Вы можете быть уверены в чистоте сделки.
                </ColumnBody>
                <ColumnBody
                    title={'Маркетинг и реклама'}
                >
                    «Реклама двигатель торговли» - банальная, прописанная истина. Но в наш информационный век – реклама, это инвестиция, которая на рубль вложения должна принести Вам минимум рубль прибыли обратно, а лучше 15. Мы много пробовали, мы ошибались,  у нас богатая фантазия и хорошая память,  для Вас – наши лучшие практики и инструменты. Агентство «Бизнес Маркет» занимается маркетингом и всеми видами продвижения: анализ рынка, Интернет продвижение, офф-лайн, спец проекты, медиа. Больше всего мы любим рекламу,  которая помогает продавать или остается в истории.  В нашем потфолио: продвижение РАО ЕЭС России, 63 Всемирный Конгресс FIABCI, вывод на рынок бизнес-брокерской компании «Альтера Инвест», работа с имиджем компании «Спрингалд», запуски спец проектов и коллабораций с «Деловым Петербургом» и «Коммерсантом», и многое, многое другое.

                    Уверены, что вместе мы сможем найти эффективный рекламный ход для Вашего предприятия! Звоните сейчас)!
                </ColumnBody>
                <ColumnBody
                    title={'Бизнес под ключ'}
                >
                    Если Вы, все таки, решили «делать бизнес под себя» и отказаться от покупки готового бизнеса, агентство «Бизнес Маркет» будет полезно Вам и на этом пути. Наши менеджеры накопили широкий опыт в различных отраслях бизнеса (отели, салоны красоты,  автобизнес, рестораны и кафе, продажа товаров и услуг и пр), имеют компетенции по анализу и оптимизации бизнес-процессов, в маркетинге, рекламе, набору и обучению персонала, владеют налаженными бизнес связями  в Краснодарском крае, Санкт-Петербурге и ЛО. Будем рады помочь Вам в создание своего бизнеса.

                    В нашем портфеле несколько готовых бизнес решений, которые мы в кротчайшие сроки можем реализовать для Вас.
                </ColumnBody>
                
                <ColumnBody
                    title={'Консалтинг'}
                >
                    Консалтинг от агентства «Бизнес Маркет» имеет 2 различных направления: личное консультирование руководителей, которое осуществляет профессиональный мозговед и коуч. Цель этого консультирования – внести баланс в предприятие через работу во внутреннем мире его собственников и менеджеров. Сложная внутренняя работа.

                    Второе направление консалтинга, которое оказываем непосредственно мы,  это решение конкретных бизнес задач, анализ показателей финансовой деятельности, анализ бизнес процессов и бизнес модели,  подбор и обучение персонала, разработка систем обучения и адаптации, поиск новых рынков сбыта и упаковка товаров и услуг.

                    Задача нашей консультации – найти те инструменты и процессы, которые созидают Ваш бизнес, и отказаться от тех, через которые Вы теряете ресурс, увеличить Вашу прибыль и уменьшить затраты.  Нам удалось сделать это для большой гастрономической сети, партии Яблоко, авто ритейла и других.
                </ColumnBody>
                <ColumnBody
                    title={'Недвижимость в Сочи'}
                >
                    Рынок недвижимости в Сочи дик и аутентичен, как первобытные африканские племена. Риски покупателя соизмеримы с рисками пилигримов, но недвижимость в Сочи желанна не менее, чем  золото этих племен. Покупайте с теми, кому Вы доверяете, доверяете нам – покупайте с нами, или покупайте с теми, кому доверяете.

                    Мы приложим все усилия, что бы Вы купили безопасную и качественную недвижимость в Сочи в рамках своего бюджета.
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
                        <button className="contact" onClick={() => setModalIsOpen(true)} >Обратная связь</button>
                    </p>
                </div>
                <LogoImage height={50} />
            </div>

            <Modal 
                isOpen = {modalIsOpen}
                onRequestClose = {() => setModalIsOpen(false)}
                overlayClassName = "formContainer-overlay"
                className = "formContainer"
            >
                <div
                    className="closeFormButton" onClick={() => setModalIsOpen(false)}
                    style = {{
                        alignSelf: 'flex-end',
                        flexBasis: '0',
                        marginBottom: '.5rem'
                    }}
                >
                    <Icon
                        path={mdiClose}
                        color="#424343"
                        size={1.5}
                    />
                </div>

                { !formSent ?
                    <form method="POST">
                        
                        <h3>Форма обратной связи</h3>
                        <br/>
                        <input className="phone" type="tel" name="phone" placeholder="Телефон (обязательно)" required/>
                        <br/>
                        <input className="name" type="text" name="name" placeholder="Имя" />
                        <br/>
                        <input className="email" type="email" name="email" placeholder="Email" />
                        <br/>

                        <input className="submitButton" type="submit" value="Отправить" onClick={(e) => {
                            e.preventDefault();
                            const formElement = document.querySelector("form");
                            var data = new FormData(formElement);

                            if(formElement.reportValidity())
                                fetch("https://formsubmit.co/ajax/mbqinbbk@sharklasers.com", { /* тут вставлять нужный мейл */
                                    method: "POST",
                                    body: data
                                })
                                .then(response => response.ok ? setFormSent(true) : console.log('сервер формы вернул ошибку') )
                        }} />
                    </form>
                :
                    <div>
                        <p>Ваша форма отправлена</p>
                        <Icon
                            path={mdiCheck}
                            color="#f3a59e"
                            size={7}
                        />
                    </div>
                }
            </Modal>
        </>
    )
}

export default Home