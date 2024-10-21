import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const cardStyle = {
    width: '300px',
    height: '400px',
  };

  const imgStyle = {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={cardStyle}>
        <img src={imgUrl} style={imgStyle} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}