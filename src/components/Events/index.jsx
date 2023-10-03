/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { EventItem } from "./components/EventItem";
import useEventData from "../../hooks/useEventData";

export const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventData();
  const handleEventItemClick = (id) => {
    // console.log("evento clickeado: ", id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
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

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoading) {
    return <div>Cargando resultados...</div>;
  }

  return (
    <>
      <p>Eventos</p>
      {renderEvents()}
    </>
  );
};
