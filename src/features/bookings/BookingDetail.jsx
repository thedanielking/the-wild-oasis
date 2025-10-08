import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";

import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "./BookingDataBox";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useBooking } from "./useBooking";
import { useMoveBack } from "../../pages/hooks/useMoveBack";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading} = useBooking();

  const navigate = useNavigate();
  const {checkout, isCheckingOut} = useCheckout();
  const {deleteBooking, isDeleting} = useDeleteBooking();

  const moveBack = useMoveBack();

  if(isLoading) return <Spinner />

  const {status, id: bookingId} = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>

        {status === "unconfirmed" && 
        <Button 
        onClick={()=> navigate(`/checkin/${bookingId}`)}>
          Check in
        </Button>
        }

        {status === "checked-in" && 
          <Button icon={<HiArrowUpOnSquare />} 
          onClick={()=> checkout(bookingId)} 
          disabled={isCheckingOut}>
            Check out
          </Button>
        }
        
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">
              Delete <Booking></Booking>
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete resourceName={"booking"} 
            onConfirm={()=> {deleteBooking(bookingId, {
              onSettled: ()=> navigate(-1) //works whether there is error or success 
            })}
          }
            disabled={isDeleting}
             />
          </Modal.Window>
        </Modal>

        
       <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
