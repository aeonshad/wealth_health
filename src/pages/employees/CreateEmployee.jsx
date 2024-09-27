import Form from '../../components/Form';

function CreateEmployee() {
    return (
        <div className="max-w-3xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4 mb-4">
            <div className="flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]">
                <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-caption">
                    Employees
                </h2>
            </div>
            <div className="w-full">
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow flex-[2]">
                    <div className="p-6 pt-0 mt-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateEmployee;
