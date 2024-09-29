export const dateFormat = (date) => {
    // Vérifiez si la date est déjà un objet Date, sinon convertissez-la
    const dateObj = date instanceof Date ? date : new Date(date);

    // Vérifiez si la conversion en objet Date a réussi
    if (isNaN(dateObj)) {
        console.error('Invalid date:', date);
        return 'Invalid date';
    }

    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    return formattedDate;
};
