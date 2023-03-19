// import PropTypes from 'prop-types';

import Statistics from './Statistics';

export default function StatisticsList({ title, stats }) {
    return (
        <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
        {stats.map(state => (
            <li class="item" key={state.id}>
                <Statistics 
                    label={state.label}
                    percentage={state.percentage}
                />
            </li>
        ))}
        </ul>
      </section>
    )
};

// StatisticsList.propTypes = {
//     title: PropTypes.string,
//     state: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,

// }