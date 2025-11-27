import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socialLinks } from "../data/personal";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary-500/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Pablo Ortiz
            </h3>
            <p className="text-gray-400 text-sm">{t('footer.role')}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <nav className="space-y-2">
              <a
                href="#inicio"
                className="block text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('footer.home')}
              </a>
              <a
                href="#proyectos"
                className="block text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('footer.projects')}
              </a>
              <a
                href="#trayectoria"
                className="block text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('footer.journey')}
              </a>
              <a
                href="#contacto"
                className="block text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('footer.contactLink')}
              </a>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.followMe')}</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-primary-600/40 hover:border-primary-500/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-primary-600/40 hover:border-primary-500/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-primary-600/40 hover:border-primary-500/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-primary-500/20 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Pablo Nicolás Ortiz. {t('footer.madeWith')}
            <Heart className="w-4 h-4 text-primary-500 fill-primary-500 animate-pulse" />
            {t('footer.and')} React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
