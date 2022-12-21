import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validation'

interface IFormError {
    name: string
    email: string
    comment: string
}

const ContactForm: React.FC = () => {

    const DEFAULT_VALUE: IFormError = {name: '', email: '', comment: ''}

    const [contactForm, setContactForm] = useState<IFormError>(DEFAULT_VALUE)
    const [errors, setErrors] = useState<IFormError>(DEFAULT_VALUE)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        
        if (id === 'name')
            setErrors({...errors, [id]: validateText(id, value)})

        if (id === 'email')
            setErrors({...errors, [id]: validateEmail(id, value)})
    }

    

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        
        if (id === 'comment')
            setErrors({...errors, [id]: validateText(id, value, 10)})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        setSubmitted(false)
        setFailed(false)

        if (contactForm.name !== '' && contactForm.email !== '' && contactForm.comment !== '')
            if (errors.name === '' && errors.email === '' && errors.comment === '') {

                const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactForm)
                })

                if (res.status === 200) {
                    setSubmitted(true)
                    setContactForm(DEFAULT_VALUE)
                } else {
                    setSubmitted(false)
                    setFailed(true)
                }
            }        
    }

    console.log(contactForm)

  return (
    <section className="contactus">
        <div className="container">
            {   
                submitted ?  (<AlertNotification alertType='success' title='Thank you for your comment!' text='We will contact you as soon as possible' />) : (<></>)
            }
            {   
                failed ?     (<AlertNotification alertType='danger' title='Something went wrong!' text='We could not submit your comment right now' />) : (<></>)
            }
                 
            <span>Come in Contact with Us</span>
            <div>
                <form id='commentForm' onSubmit={handleSubmit} noValidate>
                    <div className="user">
                        <div className="username">
                            <input id="name" placeholder="Your Name" value={contactForm.name} onChange={(e) => handleChange(e)} />
                            <span className="errorMessage">{errors.name}</span> 
                        </div>
                        <div className="useremail">
                            <input id="email" placeholder="Your Mail" value={contactForm.email} onChange={(e) => handleChange(e)} />
                            <span className="errorMessage">{errors.email}</span> 
                        </div>
                    </div>
                    <div className="commentbox">
                        <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={(e) => handleTextAreaChange(e)} />
                        <div className="errorMessage">{errors.comment}</div>
                    </div>
                    <div>
                        <button className="button-red" type="submit"><span>Post Comments</span></button>                        
                    </div> 
                </form>
            </div>            
        </div>
    </section>
  )
}

export default ContactForm