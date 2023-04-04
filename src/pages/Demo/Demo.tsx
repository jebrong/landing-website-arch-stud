import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { RootState } from "../../store";
import {
  computeTotal,
  changeFinish,
  changeArea,
} from "../../features/demoSlice";
import { useSelector, useDispatch } from "react-redux";

import { motion as m } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";

export default function Demo() {
  const { area, finish, total } = useSelector((state: RootState) => state.demo);
  const dispatch = useDispatch();

  return (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      <Container>
        <Row>
          <h2 className="mt-4 mainTitle2"> Estimate.</h2>
          <p className="my-4 ">
            Disclaimer: This is only a rough estimate and the cost will still
            vary depending on the needs of the client and the lot's location and
            characteristics.
          </p>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(computeTotal());
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Lot Area (sq.meters)</Form.Label>
              <Form.Control
                type="number"
                placeholder=" Total Lot Area (sq. meters)"
                onChange={(e) => {
                  dispatch(changeArea(e.target.value));
                }}
              />
              <Form.Text className="text-muted">
                Input the lot size of your property
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Quality of Output</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  dispatch(changeFinish(e.target.value));
                }}
              >
                <option value="BARE">BARE HOUSE</option>
                <option value="STANDARD">STANDARD HOUSE</option>
                <option value="LUXURY">LUXURY HOUSE</option>
                <option value="ICONIC">ICONIC HOUSE</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="calculate-button"
            >
              CHECK ESTIMATE
            </Button>
          </Form>
        </Row>
        <Row>
          <h2 className="mt-4 mainTitle2"> TOTAL:</h2>
          {total ? (
            <h2 className="mt-4 mainTitle2">
              {" "}
              {`Php ${total.toLocaleString("en-US")}`}
            </h2>
          ) : (
            ""
          )}
          <p className="my-4 ">
            Due to inflation in Materials and Labor Rates, the previously
            established 25k per sqm (2018-early 2020) has increased to 30k per
            sqm. By the fourth quarter of 2020, the price had begun to
            progressively rise. According to Rider Levett Bucknall's
            Construction Cost Calculator, the price has not returned this year
            and is gradually increasing, with the lowest rate of 30.1k and a
            high rate of 63.2k per sqm (as of October 8, 2021).
          </p>
        </Row>
      </Container>
    </m.div>
  );
}
