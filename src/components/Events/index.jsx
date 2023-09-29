/* eslint-disable react/prop-types */
import { EventItem } from "./components/EventItem";
import data from "../../data/events.json";

export const Events = ({ searchTerm }) => {
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log("evento clickeado: ", id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm),
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={eventItem.id}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <>
      <p>Eventos</p>
      {renderEvents()}
    </>
  );
};
