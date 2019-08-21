import '../src/style.css'
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailEditOutline, mdiEmailOutline, mdiCellphoneIphone, mdiChevronDown } from '@mdi/js';

const Typograf = require('typograf');
const tp = new Typograf({ locale: ['ru', 'en-US'] });

console.log(tp.execute(' Мир - мой мир!!   '));

function ResponsiveIcon(props) {
    return (
        <div
            style={{
                marginRight: 10,
                width: 100,
                // height: 0,
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
        </div>
    )
}

function Home() {
    return (
        <>
            <div className={'welcome'}>
                <h1
                >
                    {tp.execute('Купля-продажа готового бизнеса, франшиз и недвижемости. Консалтинг, коучинг')}</h1>
                <div className={'logo'}>
                    <div>
                        <ResponsiveIcon path={mdiPhone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiEmailOutline} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiCellphoneIphone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiEmailEditOutline} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                    </div>
                    <img src={'/static/svg/bm_logo.svg'}></img>
                </div>
                <div
                    style={{
                        display: 'flex',
                        paddingTop: '2%',
                        justifyContent: 'center',
                    }}>
                    <Icon path={mdiChevronDown} color="rgb(243, 165, 158)" size={2} />
                </div>
            </div>
            <div className={'colomn-layout'}>
                <div className={'colomn'}>
                    <h2>Готовый бизнес</h2>
                    <p display>
                        {tp.execute('Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.')}
                    </p>
                </div>
                <div className={'colomn'}>
                    <h2>Франчайзинг</h2>
                    <p display>
                        {tp.execute('Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.')}
                    </p>
                </div>
                <div className={'colomn'}>
                    <h2>Недвижемость</h2>
                    <p display>
                        {tp.execute('Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.')}
                    </p>
                </div>
                <div className={'colomn'}>
                    <h2>Консалтинг и коучинг</h2>
                    <p display>
                        {tp.execute('Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.')}
                    </p>
                </div>

            </div>
            <div className={'footer'}>
                    <div>
                    <h3>Контакты</h3>
                    <p display
                    style={{
                        color: 'white',
                        width: '50%',

                    }}>
                        {tp.execute('Товарищи! реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.')}
                    </p>
                    </div>
                    <img src={'/static/svg/bm_logo.svg'}></img>

            </div>
        </>
    )
}

export default Home