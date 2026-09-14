export default function Footer () {

    // create a new date object for the current date to give you a readerable format by using 'toLocaleDateString'
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <footer className="bg-blue-900 text-white py-4 px-4 mt-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-blue-200"> {currentDate}</p>
                <p className="text-xs text-blue-300 mt-1">
                    © {new Date().getFullYear()} Adenta Ward 4
                </p>
            </div>
        </footer>
    )
}