import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

class Assinar extends Component {
    constructor(props) {
        super(props);
        this.state = { hash: '', algo: 'SHA1', hashsigned: []};
      }
      mySubmitHandler = (event) => {
        event.preventDefault();

        alert("Hash enviada " + this.state.algo);
        let obj = {};

        obj.specialName = this.props.id;
        obj.hash = this.state.hash;
        obj.algorithm = this.state.algo;

        const response = this.postHash(obj);

        response.then(result => {

            this.setState({hashsigned: result.data});

            console.log(result);
        }).catch(err => {
            console.log("erro");
        });
      }

      async postHash(obj) {
        return await api.post('sign', obj);
      }

      myChangeHandler = (event) => {
        this.setState({hash: event.target.value});
      }
      render() {
        const { hashsigned } = this.state;
        return (
          <form onSubmit={this.mySubmitHandler}>
          <p>Digite a hash, e envie:</p>
          <div className="warapper">
            <div>
                <textarea type="text"  onChange={this.myChangeHandler} rows="4" cols="50"></textarea>
            </div>
            <div>
            <span> Escolha o algoritmo</span>
            <select value= {this.state.algo}>
                <option value="SHA1">SHA1</option>
                <option value="SHA224">SHA224</option>
                <option value="SHA256">SHA256</option>
                <option value="SHA384">SHA384</option>
                <option value="SHA512">SHA512</option>
                <option value="SHA3-224">SHA3-224</option>
                <option value="SHA3-384">SHA3-384</option>
                <option value="SHA3-512">SHA3-512</option>
                <option value="RIPEMD160">RIPEMD160</option>
                <option value="MD2">MD2</option>
                <option value="MD5">MD5</option>
            </select>

            </div>
          </div>

          <div>
            <input
                type='submit'
            />
          </div>
          <div className="hashsigned">
              {hashsigned.map(hash => (
                <article>
                    <textarea rows="4" cols="50">
                        {hash.hashAssinada}
                    </textarea>
                </article>
            ))}
          </div>
          </form>
          
        );
      }
}

export default Assinar;