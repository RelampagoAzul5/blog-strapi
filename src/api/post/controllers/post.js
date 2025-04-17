'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params; // Pegando o 'id' da URL da requisição

    // Verifica se o 'id' foi passado
    if (!id) {
      return ctx.badRequest('ID is required');
    }

    try {
      // Utiliza o 'id' para buscar o post no banco
      const post = await strapi.db.query('api::post.post').findOne({
        where: { id },
      });

      if (!post) {
        return ctx.notFound('Post not found');
      }

      return ctx.send(post);
    } catch (error) {
      return ctx.internalServerError('Something went wrong');
    }
  },
}));
