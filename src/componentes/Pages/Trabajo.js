import React from 'react'
import {useTranslation} from "react-i18next";
import './Portada.css';
import {Helmet} from 'react-helmet';
import ClientCard from "../ClientsCard/ClientsCard";

const Trabajo = () => {
  const {t} = useTranslation(["global"]);
  return (
    <div className="cont-todo">
      <Helmet>
        <title>Empowerit | {t("nav-bar.our-job")}</title>

      </Helmet>
      <div className='cont-titulo1'>
        <h2 className="titulo-portada text-center">{t("our-job.title")}</h2>
        <h3 className="texto">{t("our-job.text")}</h3>
      </div>
      <div className="clients-container">
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/clinify.png'
                    title="Clinify Health - Chicago, US"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/betway.png' title="Betway - UK"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/arqSaravia.png'
                    title="Arq Magdalena Saravia- AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/silco.png' title="SilcoPC - AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/desagoteslavictoria.png'
                    title="Desagotes La Victoria - AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/imagenmasarquitectura.png'
                    title="Imagen+Arquitectura - AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/remolquesmirage.png'
                    title="Remolques Mirage - AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/mosaicoslosamigos.png'
                    title="Mosaicos Los Amigos - AR"/>
        <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/lipinski.png'
                    title="Propiedades Lipinski - AR"/> <ClientCard
        image='https://empowerit-assets.s3.amazonaws.com/clients/renault.png' title="Renault - AR"/>
      </div>
    </div>
  )
}

export default Trabajo
