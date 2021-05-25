import firebase from 'firebase';

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

// function Login({ admin }) {
//   return (
//     <div>
//       {
//         admin !== null
//         && <div>
//           {
//             admin
//               ? <Button color="success" onClick={signOutUser}>Sign Out</Button>
//               : <Button color="success" onClick={signInUser}>Sign In</Button>
//           }
//         </div>
//       }
//     </div>
//   );
// }

// Login.propTypes = {
//   admin: PropTypes.bool
// };

export { signInUser, signOutUser };
