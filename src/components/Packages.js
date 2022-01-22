import { ListGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Packages(props) {
  const displayPackages = props.packages.map((eachPackage) => (
    <ListGroup.Item>{eachPackage}</ListGroup.Item>
  ));

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Our Packages</Card.Title>
          <Card.Text>
            Check out some of our packages! Every one is ethically sourced and
            organic
          </Card.Text>
        </Card.Body>
        <ListGroup>{displayPackages}</ListGroup>
      </Card>
    </Container>
    // <div>
    //     <div className="packages">
    //         <div className="packagesHeader">
    //             <h1>Our Packages</h1>
    //         </div>
    //         <ul>
    //             {displayPackages}
    //         </ul>
    //     </div>
    // </div>
  );
}
