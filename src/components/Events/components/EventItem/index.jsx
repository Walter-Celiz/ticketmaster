/* eslint-disable react/prop-types */
import styles from "./EventItem.module.css";

export const EventItem = ({ info, id, name, image, onEventClick }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      className={styles.eventItemContainer}
      /* onClick={() => console.log("Padre clickeado")} */
    >
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button
          className={styles.seeMoreBtn}
          onClick={handleSeeMoreClick}
        >
          Ver mas
        </button>
      </div>
    </div>
  );
};
