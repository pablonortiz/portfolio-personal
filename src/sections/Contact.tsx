import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, User, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { socialLinks } from '../data/personal'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Construct mailto URL with form data
      const subject = encodeURIComponent(`Contacto desde Portfolio - ${data.name}`)
      const body = encodeURIComponent(
        `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`
      )
      const mailtoUrl = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoUrl

      // Small delay to show success message
      await new Promise((resolve) => setTimeout(resolve, 500))

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="card-gradient rounded-2xl p-8 border border-primary-500/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.name')}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: t('contact.nameRequired') })}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: t('contact.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.emailInvalid'),
                    },
                  })}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: t('contact.messageRequired') })}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{t('contact.sending')}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t('contact.send')}</span>
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                {t('contact.success')}
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
              >
                {t('contact.error')}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
