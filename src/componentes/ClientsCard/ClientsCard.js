import React from "react";
import { Card } from "react-bootstrap";
import './ClientsCard.css';
const ClientCard = ({image, title})=>{
    return (
    <Card className="client-card">
    <Card.Img src={image} alt={title} className='client-logo'/>
    <Card.Header className="client-header">{title}</Card.Header>
    </Card>
)}
export default ClientCard;