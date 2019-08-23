export const LogoImage = ({ height = 100, ...props }) => (
    <>
        <style jsx>{`
            .logo-image {
                margin-bottom: var(--main-padding);
                height: ${height}px;
            }
        `}</style>

        <img className={'logo-image'} src={'/static/bm_logo.svg'} />
    </>
)