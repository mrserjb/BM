import '../src/style.css'
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMail } from '@mdi/js';

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
                <h1>Купля-продажа готового бизнеса, франшиз и недвижемости. Консалтинг, коучинг.</h1>
                <div className={'logo'}>
                    <div>
                        <ResponsiveIcon path={mdiMail} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiPhone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiMail} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiPhone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                    </div>
                    <img src={'/static/svg/bm_logo.svg'}></img>
                </div>
            </div>
            <div className={'pref'}>
                <p display>hlfkf</p>
            </div>
        </>
    )
}

export default Home