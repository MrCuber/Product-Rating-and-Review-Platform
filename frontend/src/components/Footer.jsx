import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          <Link to="/about"><p>Made with 🐞</p></Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
