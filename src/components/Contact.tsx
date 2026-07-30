import { useState } from 'react'
import Icon from './Icon'
import { asset, contactCopy, site } from '@/data/site'

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value })

  // No backend on a static host: compose the message and hand it to the visitor's
  // mail client, so nothing is silently dropped.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all three fields first.')
      return
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setError('')
    setSent(true)
    setForm(empty)
  }

  return (
    <section className="section" id="contact" data-reveal="">
      <div className="contact">
        <div className="contact__orb" aria-hidden="true" />
        <div className="contact__grid">
          <div>
            <h2 className="contact__title">{contactCopy.title}</h2>
            <p className="contact__body">{contactCopy.body}</p>

            <a className="contact__email" href={`mailto:${site.email}`}>
              <Icon name="mail" size={18} />
              <span>{site.email}</span>
            </a>
            <a className="contact__phone" href={site.phone.href}>
              <Icon name="phone" size={17} />
              <span>{site.phone.label}</span>
            </a>

            <div className="contact__links">
              <a href={asset(site.cv)} target="_blank" rel="noopener">
                CV (PDF)
              </a>
              <a href={site.github} target="_blank" rel="noopener">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input
                id="c-name"
                className="input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={update('name')}
              />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input
                id="c-email"
                className="input"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={update('email')}
              />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea
                id="c-msg"
                className="input"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={update('message')}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block contact__submit">
              {sent ? 'Thanks, I’ll be in touch' : 'Send message'}
            </button>
            {(error || sent) && (
              <p className={error ? 'contact__status contact__status--error' : 'contact__status'} role="status">
                {error || 'Opening your mail app with the message drafted — send it and it lands in my inbox.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
