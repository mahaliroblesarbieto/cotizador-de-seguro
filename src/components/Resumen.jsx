import React from "react";
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;
  return (
    <ContenedorResumen>
      <h1>Resumen</h1>
      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;

