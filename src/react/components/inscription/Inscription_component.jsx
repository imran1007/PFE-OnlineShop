import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InscriptionComponent = (
  email,
  username,
  first_name,
  last_name,
  password,
  signup,
  onFieldChange
) => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }} style={{ marginTop: "200px" }}>
          <Form onSubmit={signup}>
            <Form.Group as={Row} controlId="formHorizontalUsername">
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalFirstName">
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  value={first_name}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalLastName">
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign up</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default InscriptionComponent;
