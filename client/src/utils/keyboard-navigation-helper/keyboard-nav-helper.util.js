const navigateToPath = (listenerTarget, event) => {
    if(event.keyCode === 13){
        event.preventDefault()

        listenerTarget.current.click()
    }
}

export default navigateToPath