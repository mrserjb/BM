import '../src/style.css'

function Home() {
    return (
        <>
            <div className={'welcome'}>
                <h1>Купля-продажа готового бизнеса, франшиз и недвижемости. Консалтинг, коучинг.</h1>
                <div className={'logo'}>
                    <p>hlfkf</p>
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