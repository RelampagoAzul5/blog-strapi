const axios = require('axios');

module.exports = {
  async afterCreate(event) {
    try {
      const webhookUrl = process.env.NETLIFY_WEB_HOOK;

      await axios.post(webhookUrl);

      console.log('Rebuild disparado na Netlify com sucesso!');
    } catch (error) {
      console.error('Erro ao disparar o rebuild da Netlify:', error.message);
    }
  },
};