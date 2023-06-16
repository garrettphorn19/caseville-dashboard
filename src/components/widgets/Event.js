import React from "react"
import styled from "styled-components"

export default function Event(props) {
  const { event } = props

  return (
    <EventWrapper active={event.active}>
      <TextWrapper>
        <TopRow>
          <TimeWrapper>
            <Time>{event.time}</Time>
          </TimeWrapper>
          <Title>{event.title}</Title>
        </TopRow>
        <Divider />
        <Subtitle>{event.subtitle}</Subtitle>
        <Description>{event.description}</Description>
      </TextWrapper>
    </EventWrapper>
  )
}

const EventWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  width: 450px;
  height: 127px;

  background: ${props => (props.active ? "rgba(68, 66, 178, 0.1)" : "#FFFFFF")};
  box-shadow: ${props =>
    props.active ? "inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)" : "none"};
  border-radius: 10px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 293px;
  height: 107px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 243px;
  height: 36px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  gap: 10px;

  width: 54px;
  height: 36px;

  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 5px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

const Time = styled.p`
  /* Time */

  width: 42px;
  height: 24px;

  /* Event Time Text */

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const Title = styled.p`
  /* Event Title */

  width: 179px;
  height: 36px;

  /* Event Title Text */

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Event Text Color */

  color: #3913b8;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

const Divider = styled.div`
  width: 293px;
  height: 5px;

  background: rgba(68, 66, 179, 0.5);
  background-blend-mode: overlay;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

const Subtitle = styled.p`
  width: 231px;
  height: 24px;

  /* Event Subtitle Text */

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`

const Description = styled.p`
  width: 231px;
  height: 18px;

  /* Event Description Text */

  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #192150;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`
