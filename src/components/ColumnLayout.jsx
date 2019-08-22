import React from 'react'

export const ColumnLayout = props => (
    <div className={'column-layout'}>
        <style jsx>{`
            .column-layout {
                padding: 10% 10% 5% 10%;
                /* padding-top: 10%;
                padding-bottom: 5%; */
                display: flex;
                flex-wrap: wrap;
            }

            .column {
                width: 50%;
                padding-left: 5%;
                padding-right: 5%;
                padding-bottom: 5%;
                box-sizing: border-box;
            }

            @media (max-width: 500px) {
                .column {
                    width: 100%;
                    /* padding-left: 10px;
                    padding-right: 10px; */
                }
            }
        `}</style>

        {React.Children.map(props.children, (x, index) => (
            <div className={'column'} key={index}>
                {x}
            </div>
        ))}
    </div>
)