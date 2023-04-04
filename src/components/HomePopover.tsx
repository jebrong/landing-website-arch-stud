import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">About us</Popover.Header>
    <Popover.Body>
      Their previous office was at the heart of Bangkok’s business district and
      after a long period of paying the costly rental prices in an office
      building, they decided that it was time to build their own headquarters.
    </Popover.Body>
  </Popover>
);

export default function HomePopover() {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="outline-primary">More Info</Button>
    </OverlayTrigger>
  );
}
