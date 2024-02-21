// Required for side-effects
import "firebase/firestore";
import { initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 'AIzaSyCRyLE0NVZV3nd-kIDTuAI9p3WzvG3InNg',
	authDomain: 'linkedin-clone-ce672.firebaseapp.com',
	projectId: 'linkedin-clone-ce672',
	storageBucket: 'linkedin-clone-ce672.appspot.com',
	messagingSenderId: '591554851020',
	appId: '1:591554851020:web:0c033c1e0fcf86bf891269',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);


export { db };
