import FlagEmoji from './FlagEmoji';
import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>
        {country.emoji && <FlagEmoji flag={country.emoji} />}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
