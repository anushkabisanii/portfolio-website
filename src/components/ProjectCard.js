import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, codeLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          {codeLink && ( // Only display the button if codeLink is provided
            <Button variant="primary" href={codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </Button>
          )}
        </div>
      </div>
    </Col>
  )
}
