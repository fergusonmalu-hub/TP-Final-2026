import "./ConfirmModal.css";

function ConfirmModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="confirm-modal">
                <h2>{title}</h2>
                <p>{message}</p>

                <div className="confirm-modal-actions">
                    <button 
                        className="cancel-btn"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button 
                        className="confirm-btn"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;