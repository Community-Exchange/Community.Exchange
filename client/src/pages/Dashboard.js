import React from "react";
// import ExchangeForm from "components/Forms/ExchangeForm";
import Nav from "components/Nav/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Nav />
      {/* <ExchangeForm /> */}
      <div className="container ">
      <h3 className="title-style">Exchange Posts</h3>
      <Container className="dashboard-style">
        
        <Row>
          <Col md={4} className="dash-profile "> Profile Card</Col>
          <Col md={8} className="dash-post">
            {" "}
            This text is really long and the height of its container is only 100
            pixels. Therefore, a scrollbar is added to help the reader to scroll
            the content. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est
            usus legentis in iis qui facit eorum claritatem. This text is really
            long and the height of its container is only 100 pixels. Therefore,
            a scrollbar is added to help the reader to scroll the content. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum. Typi non habent claritatem insitam; est usus legentis in iis
            qui facit eorum claritatem.
            This text is really long and the height of its container is only 100
            pixels. Therefore, a scrollbar is added to help the reader to scroll
            the content. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est
            usus legentis in iis qui facit eorum claritatem. This text is really
            long and the height of its container is only 100 pixels. Therefore,
            a scrollbar is added to help the reader to scroll the content. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum. Typi non habent claritatem insitam; est usus legentis in iis
            qui facit eorum claritatem.
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}
