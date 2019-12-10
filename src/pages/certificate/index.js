import React, { Component } from 'react';
import api from '../../services/api';
import Assinar from '../assinar';
import './style.css';

class Certificate extends Component {
    state = {
        certificate: {},
        show: false
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        try {
            const response = await api.get(`/list/${id}`);
            this.setState({namespecial: id});
        
            this.setState({ certificate: response.data});

        } catch(ex) {
            console.log(ex);
        }

    }

    onClick = (event) => {
        this.setState({show: true});
    }

    render() {
        const { certificate } = this.state;

        return (
        <div>
            <div className="product-info">
                <h1>{certificate.nome}</h1>
                <p>{certificate.nomeEspecial}</p>
                <button onClick={this.onClick}> Assinar</button>
            </div>
            { this.state.show ? <Assinar id={certificate.nomeEspecial} /> : null }
        </div>
        
        );
    }
}

export default Certificate;