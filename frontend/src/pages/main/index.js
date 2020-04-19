import React, {Component} from 'react';
import './styles.css'
import {Link} from 'react-router-dom'


import api from '../../services/api'

export default class main extends Component{
  state = {
    products : [],
    productInfo: {},
    page: 1,
  };

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
   
    const response = await api.get(`/products?page=${page}`);

    const {data , ...productInfo} = response.data;

      this.setState({products: response.data, productInfo, page });

    console.log(response.data);
  };

  prevPage = () => {
    const {page, productInfo} = this.state;
    if (page === 1)
      return ;
    const pageNumber = page -1;
    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const {page, productInfo} = this.state;
    console.log(page);
    if( page === productInfo.pages)
              return;

      const pageNumber = page + 1;
      console.log(productInfo.pages);
      this.loadProducts(pageNumber);
  }; 

  render(){
    const {products, page, productInfo} = this.state;

    return (
       <div className='product-list'>
         {products.map(product => (

           <article key = {product.id}>
            
                <strong > {product.name }</strong>
                <p> {product.description}</p>

                <Link to = {`/product/${product.id}`}> Acessar</Link>
               
           </article>
           
         ))}
           <div className= "actions"> 
              <button disabled = {page === 1} onClick = {this.prevPage} >Anterior</button>
         <button disabled = {page === productInfo} onClick= {this.nextPage}>Proximo </button>
           
           </div>
         </div>
    );
  }
}
