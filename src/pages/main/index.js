import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './style.css';

class Main extends Component {
    state = {
        certificates: []
    };

    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts = async (page = 1) => {

        try {
            const response = await api.get(`list`);
            const { data } = response;
    
            this.setState({ certificates : data });
        
        } catch (ex) {
            console.log(ex);
        }
        
    };

    render() {
        const { certificates } = this.state;

        return (
           
        <div className="product-list">
        
            {certificates.map(certificate => (
                <article key={certificate.nomeEspecial}>
                    <strong>{certificate.nome}</strong>
                    <p>{certificate.validade}</p>
                    <Link to={`/certificate/${certificate.nomeEspecial}`}>Acessar</Link>
                </article>
            ))}
        </div>
        );
    }
}

export default Main;
