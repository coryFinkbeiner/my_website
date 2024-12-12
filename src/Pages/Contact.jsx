import { useState, useEffect } from 'react'
import { doc, setDoc, getDoc, } from 'firebase/firestore'
import { db } from '../FirebaseConfig'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const styles = {
    body: {
      backgroundColor: '#121212',
      color: '#e0e0e0',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
    },
    contact: {
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      borderBottom: '2px solid #bb86fc',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    h1: {
      color: '#bb86fc',
      fontSize: '2.5em',
      marginBottom: '10px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      flexGrow: 1, // Allow the form to grow and fill available space
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      color: '#bb86fc',
      marginBottom: '5px',
    },
    input: {
      backgroundColor: '#1e1e1e',
      border: '1px solid #bb86fc',
      borderRadius: '4px',
      color: '#e0e0e0',
      padding: '10px',
      fontSize: '1em',
    },
    textarea: {
      backgroundColor: '#1e1e1e',
      border: '1px solid #bb86fc',
      borderRadius: '4px',
      color: '#e0e0e0',
      padding: '10px',
      fontSize: '1.2em',
      resize: 'none', // Prevent manual resizing
      flexGrow: 1, // Allow the textarea to grow
      minHeight: '300px', // Set a minimum height for the textarea
    },
    sendButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#bb86fc',
      color: '#121212',
      border: 'none',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(187, 134, 252, 0.3)',
      zIndex: 1000,
      fontSize: '0.8em',
      fontWeight: 'bold',
    },
  };


  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#1e1e1e',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(187, 134, 252, 0.3)',
      textAlign: 'center',
      maxWidth: '300px',
      width: '100%',
    },
    modalText: {
      color: '#e0e0e0',
      fontSize: '1.2em',
      marginBottom: '20px',
    },
    closeButton: {
      backgroundColor: '#bb86fc',
      color: '#121212',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
    },
  };




  return (
    <div style={styles.body}>
      <div style={styles.contact}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Contact Me</h1>
        </header>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input  type="text" id="name" name="name" style={styles.input} required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" style={styles.input} required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="body" style={styles.label}>Message:</label>
            <textarea id="body" name="body" style={styles.textarea} required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </form>

        {/* Spacer to ensure space at the bottom */}
        <div style={{ height:'20px' }}></div>

        <button style={styles.sendButton} aria-label="Send Message"
          onClick={() => {
            (async () => {
              const docRef = doc(db, 'test', name);
              await setDoc(docRef, { email, message });
              console.log('Data added successfully!');
              setShowModal(true);
            })();
          }}
        >
          Send
        </button>

        {showModal && (
          <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
              <p style={modalStyles.modalText}>Your message has been sent.</p>
              <button style={modalStyles.closeButton} onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}

     </div>
    </div>
  );
}

export default Contact