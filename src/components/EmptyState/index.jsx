import EmptyStateStyles from './style.module.css';

function EmptyState() {
    return (
        <div className = {EmptyStateStyles.container}>
            <p className={EmptyStateStyles.title}>Your life is a black page. You write on it.</p>
            <p className={EmptyStateStyles.description}>So start by adding your tasks here.</p>
        </div>
    )
}

export default EmptyState;