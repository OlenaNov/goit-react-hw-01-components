import PropTypes from 'prop-types';

import Statistics from './Statistics';
import css from 'components/Statistics/Statistics.module.css';
import createColor from 'components/Statistics/createColor.js'

export default function StatisticsList({ title, stats }) {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
        <ul className={css["stat-list"]}>
        {stats.map(state => (
            <li className={css.item} style={{background: createColor()}} key={state.id}>
                <Statistics 
                    label={state.label}
                    percentage={state.percentage}
                />
            </li>
        ))}
        </ul>
      </section>
    );
};

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
};