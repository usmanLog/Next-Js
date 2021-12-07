import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem({ event }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={event.image ? event.image.formats.thumbnail.url : "/images/event.default.png"}
          alt="hehe"
          height={100}
          width={170}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </span>
        <h3>{event.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${event.slug}`}>
          <a className="btn">Detauks</a>
        </Link>
      </div>
    </div>
  );
}
