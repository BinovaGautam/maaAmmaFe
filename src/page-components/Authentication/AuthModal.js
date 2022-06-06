import { useRef, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Signin from "./Signin";
import Signup from "./Signup";

const AuthModal = () => {
    const [errorMessages, setErrorMessages] = useState([]);
    const [modalType, setModalType] = useState('signin');
    const closeRef = useRef(null)
    const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <div
        className="modal modal1 fade"
        id="authModel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              >
                <i className="fas close fa-times"></i>
              </button>
            </div>

            <div className="modal-body">
                {modalType === 'signin' ?  <Signin setModalType={() => setModalType("signup")} /> : <Signup closeRef={closeRef} setModalType={() => setModalType("signin")} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AuthModal;