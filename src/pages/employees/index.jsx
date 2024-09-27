import { Link } from 'react-router-dom';

function Employees() {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Page temporaire des employés</h1>
            <p className="text-lg">Cette page est actuellement en construction.</p>
            <Link className="text-lg mt-4 font-medium hover:underline text-muted-foreground hover:text-foreground" to="/employees/create">
                Créer un Nouvel Employé
            </Link>
        </div>
    );
}

export default Employees;
