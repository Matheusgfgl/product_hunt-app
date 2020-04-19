const connection = require('../database/connection');

module.exports = {

  async index(request, response){
      const {page = 1} = request.query;

    const product = await connection('products')
    .limit(5)
    .offset((page - 1) * 5)
    .select('*');

    return response.json(product);

  },
  
  async show(request, response){
    const {id} = request.params;

    const product = await connection('products').where('id',id);
    return response.json(product);

  },
  
    async create(request, response){
      const {name, description, url} = request.body;

      const [id] = await connection('products').insert({
        name,
        description,
        url,
      });

      return response.json({id});
    },

    async delete(request, response){
      const {id} = request.params;
      
      await connection('products').where('id', id).delete();

      return response.status(204).send();
    }
};