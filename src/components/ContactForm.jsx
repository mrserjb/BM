import React, { useCallback } from 'react';
import Modal from 'react-modal';
import { mdiClose, mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';


export const ContactForm = ({modalIsOpen, formSent, setModalIsOpen, setFormSent}) => {

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const formElement = document.querySelector(".contactForm");
    
        if(formElement.reportValidity())
             fetch(`https://formsubmit.co/ajax/${process.env.email}`, {
                method: "POST",
                body: new FormData(formElement)
            })
            .then(response => response.ok ? setFormSent(true) : console.log('сервер формы вернул ошибку') )
    }, []);

    return (
        <Modal 
            isOpen = {modalIsOpen}
            onRequestClose = {() => setModalIsOpen(false)}
            overlayClassName = "formContainer-overlay"
            className = "formContainer"
        >
            <Icon
                path={mdiClose}
                color="#424343"
                size={1.5}

                className="closeFormButton" 
                onClick={() => setModalIsOpen(false)}
            />

            { !formSent ?
                <form className="contactForm" method="POST">
                    
                    <h3>Форма обратной связи</h3>
                    <br/>
                    <input className="phone" type="tel" name="phone" placeholder="Телефон (обязательно)" required/>
                    <br/>
                    <input className="name" type="text" name="name" placeholder="Имя" />
                    <br/>
                    <input className="email" type="email" name="email" placeholder="Email" />
                    <br/>

                    <input className="submitButton" type="submit" value="Отправить" onClick={handleSubmit} />
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

            <style jsx global>{`
            .formContainer-overlay {
                background-color: rgba(42, 43, 43, .75);
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .formContainer {
                padding: var(--main-padding);
                background-color: white;
                overflow: auto;
            
                display: flex;
                flex-direction: column;
            
                text-align: center;
            }
            
            .ReactModal__Overlay {
                opacity: 0;
                transition: opacity .5s ease-in-out;
            }
            .ReactModal__Overlay--after-open{
                opacity: 1;
            }
            .ReactModal__Overlay--before-close{
                opacity: 0;
            }
            
            .closeFormButton {
                align-self: flex-end;
                flex-grow: 0;
                margin-bottom: .5rem;
            }

            form {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-grow: 1; 
            }
            form > * {
                font-family: 'Montserrat', sans-serif;
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 400;
                color: #424343;
                hyphens: auto;
            }
            form input {
                padding: .5rem .5rem;
            }
            
            .submitButton {
                background-color: rgb(243, 165, 158);
                border: none;
                font-weight: 400;
                justify-self: flex-end;
            }
            .submitButton:hover {
                background-color: aqua;
            }

            @media (max-width: 500px) {
                .formContainer {
                    width: 100%;
                    height: 100%;
                }
                .closeFormButton{
                    margin-top: .5rem;
                }
            }
        `}</style>
        
        </Modal>
    )
}