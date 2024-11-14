import Main from '@/layouts/main';

export default function Index() {
    function showModal2() {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            (modal as HTMLDialogElement).showModal();
        }
    }
    return (
        <Main>
            <div className="p-3">
                <div className="mb-3 font-bold">Base</div>
                <p>Just another module created using mxent/stack.</p>

                <button className="btn">Button</button>
                <button className="btn btn-neutral">Neutral</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-link">Link</button>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={showModal2}>
                    open modal
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </Main>
    );
}
