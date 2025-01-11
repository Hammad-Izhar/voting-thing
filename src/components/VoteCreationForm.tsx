export default function VoteCreationForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch("/api/newVoteThing", {
            method: "POST",
            body: new FormData(event.currentTarget),
        });

        const data = await response.json();
        if (data.message) {
            alert(data.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4 py-10"
            method="post"
        >
            <div className="grid place-items-center">
                <label className="invisible">Create a new vote thing</label>
                <input
                    placeholder="New Vote Thing!"
                    className="row-start-2 placeholder:text-center py-2 px-1 text-3xl placeholder:font-semibold font-semibold text-center"
                    name="vote-name"
                    required
                />
            </div>

            <div className="grid place-items-center gap-1">
                <label>Top N</label>
                <input
                    className="font-semibold text-center py-2 px-1 text-3xl"
                    type="number"
                    defaultValue="5"
                    min="1"
                    max="100"
                    name="vote-top-n"
                />
            </div>

            <input type="submit" className="hidden"></input>
        </form>
    );
}
