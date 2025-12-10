import { LanguageContext } from '../../../context/LanguageProvider.jsx';
import { HiOutlineMail } from 'react-icons/hi';
import { useContext } from 'react'

    
const Contact = () => {
  const { t } = useContext(LanguageContext);
  return (

   <section id="contact" className="relative min-h-screen py-12 px-4 rounded-t-3xl -mt-8  flex items-center overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">
          {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
        </h2>

        <p className=" md:text-lg text-muted text-center mb-8">
          {t.contact.description}
        </p>


        <div className="flex justify-center items-center gap-2 text-muted mb-8">
          <HiOutlineMail className="text-2xl text-primary" />
          <a
            href={`mailto:${t.contact.email}`}
            className="text-lg md:text-xl font-heading hover:text-primary transition-colors"
          >
            {t.contact.email}
          </a>
        </div>

     
        <form
          action="https://formsubmit.co/aa3b3880618f412e6f4ea629137414c2"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={t.contact.emailSubject} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="block text-sm font-heading mb-1">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t.contact.form.namePlaceholder}
              className="w-full px-3 py-2 bg-card border border-border rounded-lg "
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-heading mb-1">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t.contact.form.emailPlaceholder}
              className="w-full px-3 py-2 bg-card border border-border rounded-lg "
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-heading mb-1">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={t.contact.form.messagePlaceholder}
              rows={4}
              className="w-full px-3 py-2 bg-card border border-border rounded-lg "
            />
          </div>

          <button
            type="submit"
            className="w-full group relative px-6 py-3 bg-primary text-white font-heading text-base rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              <HiOutlineMail className="text-xl group-hover:scale-110 transition-transform duration-300" />
              {t.contact.form.submit}
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
