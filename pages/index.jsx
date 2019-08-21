import '../src/style.css'
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMail } from '@mdi/js';

function Home() {
    return (
        <>
            <div className={'welcome'}>
                <h1>Купля-продажа готового бизнеса, франшиз и недвижемости. Консалтинг, коучинг.</h1>
                <div className={'logo'}>
                    <div>
                    <Icon path={mdiPhone} color="rgb(243, 165, 158)" size={2} />
                    <Icon path={mdiMail} color="rgb(243, 165, 158)" size={2} />
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