const axios = require('axios');

module.exports = {
  async afterCreate(event) {
    try {
      const webhookUrl = 'https://api.netlify.com/build_hooks/68032df711181ca094180834';

      await axios.post(webhookUrl);

      console.log('Rebuild disparado na Netlify com sucesso!');
    } catch (error) {
      console.error('Erro ao disparar o rebuild da Netlify:', error.message);
    }
  },
};