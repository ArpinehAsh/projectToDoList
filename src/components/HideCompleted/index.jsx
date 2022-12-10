import CompletedStyle from './style.module.css'

function HideCompleted({onHideCompleted}) {
    return(
        <div>
            <div className = {CompletedStyle.completed}>
            <label>
                <input
                    type = 'checkbox'
                    onClick = {onHideCompleted}/>
                Hide Completed
            </label>
        </div>
    </div>      
    )
}

export default HideCompleted;